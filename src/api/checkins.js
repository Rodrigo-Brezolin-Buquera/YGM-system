import { runTransaction, doc, collection, updateDoc, query, getDocs, where, limit } from "firebase/firestore/lite"
import { contractsCol, calendarCol, checkinsCol, } from "./config"
import { database } from "./config"
import { findItemById } from "."

export const findCheckinsLimit = async (userId, n) => {
    const col = collection(database, checkinsCol);
    const q = query(col, limit(n), where("contractId", "==", userId));
    const snap = await getDocs(q);
    const result = snap.docs.map(doc => { return { ...doc.data(), id: doc.id } })
    return result;
};


export const createCheckin = async (checkinData, limits) => {
    const { id, capacity, contractId, contractLimit } = limits
    const { checkinId, date, userName, time } = checkinData
    const checkin = {
        yogaClassId : id,
        contractId,
        date,
        time,
        name: userName,
        verified: false,
    }

    await runTransaction(database, async (transaction) => {
        const checkinDoc = doc(collection(database, checkinsCol), checkinId)
        transaction.set(checkinDoc, checkin)

        const contractDoc = doc(collection(database, contractsCol), contractId)
        transaction.update(contractDoc, { "currentContract.availableClasses": contractLimit - 1 })

        const classDoc = doc(collection(database, calendarCol), id)
        transaction.update(classDoc, { capacity: capacity - 1 })
    })
}

export const deleteCheckin = async (checkinId, limits) => {
    const { id, capacity, contractId, contractLimit } = limits

    await runTransaction(database, async (transaction) => {
        const checkinDoc = doc(collection(database, checkinsCol), checkinId)
        transaction.delete(checkinDoc)

        const contractDoc = doc(collection(database, contractsCol), contractId)
        transaction.update(contractDoc, { "currentContract.availableClasses": contractLimit + 1 })

        const classDoc = doc(collection(database, calendarCol), id)
        transaction.update(classDoc, { capacity: capacity + 1 })
    })
}

export const validateCheckin = async (checkinId, status) => {
    const checkinDoc = doc(collection(database, checkinsCol), checkinId)
    await updateDoc(checkinDoc, { verified: status })
}

export const cancelCheckin = async (checkinId, capacity) => {
    const [contractId, yogaClassId] = checkinId.split("+")
    const { currentContract } = await findItemById(contractsCol, contractId)
    const limits = {
        yogaClassId,
        capacity,
        contractId,
        contractLimit: currentContract.availableClasses
    }

    await deleteCheckin(checkinId, limits)
}


export const createContractlessCheckin = async (checkinData, limits) => {
    const { date, name, time } = checkinData
    const { yogaClassId, capacity} = limits
    const checkinId = `${yogaClassId}+${name}+${Date.now().toString()}`
    const checkin = {
        yogaClassId,
        date,
        time,
        name,
        contractless:"contractless",
        verified: false,
    }

    await runTransaction(database, async (transaction) => {
        const checkinDoc = doc(collection(database, checkinsCol), checkinId)
        transaction.set(checkinDoc, checkin)

        const classDoc = doc(collection(database, calendarCol), yogaClassId)
        transaction.update(classDoc, { "capacity": capacity - 1 })
    })
}

export const cancelContractlessCheckin = async (checkinId, capacity) => {
    const [yogaClassId] = checkinId.split("+")
   
    await runTransaction(database, async (transaction) => {
        const checkinDoc = doc(collection(database, checkinsCol), checkinId)
        transaction.delete(checkinDoc)

        const classDoc = doc(collection(database, calendarCol), yogaClassId)
        transaction.update(classDoc, { "capacity": capacity + 1 })
    })
}
