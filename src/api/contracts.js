import { collection, doc, runTransaction,   updateDoc } from "firebase/firestore/lite"
import { calculateEndDate, formatDate } from "../utils/dates"
import { checkinsCol, contractsCol, database, usersCol } from "./config"
import { createItemWithId, findItemWhere, updateItem } from "."

export const createContract = async ({ name, plan, date , id}) => {
    const [frequency, dur] = plan.split("-")
    const [duration, quantity] = calculatePlanNumbers(frequency, dur)
    const contract = {
        name,
        currentContract: {
            active: true,
            plan,
            ends: calculateEndDate(date, duration),
            started: formatDate(date, "DD/MM/YYYY"),
            availableClasses: quantity
        }
    }
    await createItemWithId(contractsCol, contract, id)
    await updateItem(usersCol, {active:true}, id)
}

export const newContract = async ({ plan, date }, id) => {
    const [frequency, dur] = plan.split("-")
    const [duration, quantity] = calculatePlanNumbers(frequency, dur)    
    const contract = {
        currentContract: {
            active: true,
            plan,
            ends: date && calculateEndDate(date, duration),
            started:  date && formatDate(date, "DD/MM/YYYY"),
            availableClasses: quantity
        }
    }
    await updateItem(contractsCol, contract, id)
}

export const updateContract = async (values, id) => {
    const contract = {
        name: values.name,
        currentContract: {
            plan: values.plan,
            ends: formatDate(values.ends, "DD/MM/YYYY"),
            started: formatDate(values.started, "DD/MM/YYYY"),
            availableClasses: values.availableClasses
        }
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
        Contínuo: 0
    };
    const freq = frequency.charAt(0);

    const quantity = durationTable[duration] * Number(freq) * 4;
    return [durationTable[duration], quantity];
};





