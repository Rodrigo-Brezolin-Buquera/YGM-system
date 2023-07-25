import { runTransaction, doc, collection, query, getDocs, where, limit } from "firebase/firestore/lite"
import { contractsCol, calendarCol, checkinsCol, } from "./config"
import { database } from "./config"
import { findItemById } from "."
import { namePattern } from "./patterns";


const checkinCollection = collection(database, checkinsCol);
const contractCollection = collection(database, contractsCol)
const calendarCollection = collection(database, calendarCol)

export const findCheckinsLimit = async (userId, n) => {
    const q = query(checkinCollection, limit(n), where("contractId", "==", userId));
    const snap = await getDocs(q);
    const result = snap.docs.map(doc => { return { ...doc.data(), id: doc.id } })
    return result;
};


export const createCheckin = async (checkinData, limits) => {
    const { id, capacity, contractId, contractLimit } = limits
    const { checkinId, date, userName, time } = checkinData
    const checkin = {
        yogaClassId: id,
        contractId,
        date,
        time,
        name: userName,
    }
    const userWithAPlanContract = !isNaN(contractLimit)

    await runTransaction(database, async (transaction) => {
        transaction.set(doc(checkinCollection, checkinId), checkin)
        transaction.update(doc(calendarCollection, id), { capacity: capacity - 1 })
        userWithAPlanContract &&
            transaction.update(doc(contractCollection, contractId), { "availableClasses": contractLimit - 1 })
    })
}

export const deleteCheckin = async (checkinId, limits) => {
    const { id, capacity, contractId, contractLimit } = limits
    const userWithAPlanContract = !isNaN(contractLimit)

    await runTransaction(database, async (transaction) => {
        transaction.delete(doc(checkinCollection, checkinId))
        transaction.update(doc(calendarCollection, id), { capacity: capacity + 1 })
        userWithAPlanContract &&
            transaction.update(doc(contractCollection, contractId), { "availableClasses": contractLimit + 1 })
    })
}

export const cancelCheckin = async (checkinId, capacity) => {
    const [contractId, yogaClassId] = checkinId.split("+")
    const contract = await findItemById(contractsCol, contractId)
    const limits = {
        yogaClassId,
        capacity,
        contractId,
        contractLimit: contract.availableClasses
    }

    await deleteCheckin(checkinId, limits)
}


export const createContractlessCheckin = async (checkinData, limits) => {
    const { date, name, time } = checkinData
    const { yogaClassId, capacity } = limits

    if (!name.match(namePattern.value)) {
        throw new Error(namePattern.message)
    }

    const checkinId = `${yogaClassId}+${name}+${Date.now().toString()}`
    const checkin = {
        yogaClassId,
        date,
        time,
        name,
        contractless: "contractless",
    }

    await runTransaction(database, async (transaction) => {
        transaction.set(doc(checkinCollection, checkinId), checkin)
        transaction.update(doc(calendarCollection, yogaClassId), { "capacity": capacity - 1 })
    })
}

export const cancelContractlessCheckin = async (checkinId, capacity) => {
    const [yogaClassId] = checkinId.split("+")

    await runTransaction(database, async (transaction) => {
        transaction.delete(doc(checkinCollection, checkinId))
        transaction.update(doc(calendarCollection, yogaClassId), { "capacity": capacity + 1 })
    })
}


