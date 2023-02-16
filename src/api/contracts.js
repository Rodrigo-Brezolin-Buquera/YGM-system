import { collection, doc, runTransaction,   updateDoc } from "firebase/firestore/lite"
import { calculateEndDate, formatDate } from "../utils/dates"
import { checkinsCol, contractsCol, database, usersCol } from "./config"
import { createItemWithId, findItemWhere, updateItem } from "."

export const createContract = async ({ name, plan, date }, id) => {
    const contract = {
        name,
        currentContract: {
            active: true,
            plan,
            ends: calculateEndDate(date, table[plan].duration),
            started: formatDate(date, "DD/MM/YYYY"),
            availableClasses: table[plan].quantity
        }
    }
    await createItemWithId(contractsCol, contract, id)
}

export const newContract = async ({ plan, date }, id) => {
    console.log("yyyy-mm-dd",date)

    const contract = {
        currentContract: {
            active: true,
            plan,
            ends: date && calculateEndDate(date, table[plan].duration),
            started:  date && formatDate(date, "DD/MM/YYYY"),
            availableClasses: table[plan].quantity
        }
    }
    await updateItem(contractsCol, contract, id)
}

export const updateContract = async (values, id) => {
    const contract = {
        currentContract: {
            name: values.name,
            active: values.active,
            plan: values.plan,
            ends: formatDate(values.ends, "DD/MM/YYYY"),
            started: formatDate(values.started, "DD/MM/YYYY"),
            availableClasses: values.availableClasses
        }
    }
    await updateItem(contractsCol, contract, id)
}

export const changeStatus = async (id, status) => {
    const docRef = doc(collection(database, contractsCol), id);
    await updateDoc(docRef, { "currentContract.active": status });
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



const table = {
    "1x-Mensal": { duration: 1, quantity: 4 },
    "2x-Mensal": { duration: 1, quantity: 8 },
    "1x-Trimestral": { duration: 3, quantity: 12 },
    "2x-Trimestral": { duration: 3, quantity: 24 },
    "1x-Semestral": { duration: 6, quantity: 24 },
    "2x-Semestral": { duration: 6, quantity: 48 },
    "---Gympass": { duration: 0, quantity: 0 },
}

