import { collection, doc, runTransaction } from "firebase/firestore/lite"
import { calculateEndDate, formatDate } from "../utils/dates"
import { checkinsCol, contractsCol, database, usersCol } from "./config"
import { createItemWithId, findItemWhere, updateItem } from "."
import { capitalizeFirstLetter } from "../utils/names"

export const createContract = async ({ name, plan, date, id }) => {      
    const contract = toModelContract(plan, date)
    contract.name = name
    await createItemWithId(contractsCol, contract, id)
    await updateItem(usersCol, { active: true }, id)
}

export const newContract = async ({ plan, date }, id) => {
    const contract = toModelContract(plan, date )
    await updateItem(contractsCol, contract, id)
}

export const updateContract = async (values, id) => {
    const contract = {
        name: capitalizeFirstLetter(values.name),
        plan: values.plan,
        ends: values.ends ? formatDate(values.ends, "DD/MM/YYYY") : null,
        started: formatDate(values.started, "DD/MM/YYYY"),
        availableClasses: isNaN(values.availableClasses) ? null : values.availableClasses
    }
    await updateItem(contractsCol, contract, id)
}

export const deleteContract = async (userId) => {
    const checkins = await findItemWhere(checkinsCol, "contractId", userId)

    await runTransaction(database, async (transaction) => {
        const contractDoc = doc(collection(database, contractsCol), userId)
        transaction.delete(contractDoc)
        const userDoc = doc(collection(database, usersCol), userId)
        transaction.delete(userDoc)
        checkins.forEach(checkin => {
            const docRef = doc(collection(database, checkinsCol), checkin.id);
            transaction.delete(docRef)
        })
    })
}

export const calculatePlanNumbers = (frequency, duration) => {
    const durationTable = {
        Mensal: 1,
        Trimestral: 3,
        Semestral: 6,
        Anual: 12,
        Gympass: 0,
        TotalPass: 0,
        Avulso: 0
    };
    const weeklyClasses = Number(duration ? frequency.charAt(0) : 0)
    const monthlyClasses = weeklyClasses * 4
    const finalQuantity = durationTable[duration] * monthlyClasses;
    return [durationTable[duration], finalQuantity];
};

const toModelContract = (plan, date) => {
    const [frequency, dur] = plan.split("-")
    const [contractDuration, classesQuantity] = calculatePlanNumbers(frequency, dur)
    const contract = {
        plan,
        ends:  contractDuration ? calculateEndDate(date, contractDuration) : null,
        started: date && formatDate(date, "DD/MM/YYYY"),
        availableClasses: classesQuantity || null
    }
    return contract

}




