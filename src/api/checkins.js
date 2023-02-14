import { runTransaction, doc, collection, updateDoc } from "firebase/firestore/lite"
import { contractsCol, calendarCol, checkinsCol } from "./config"
import { database } from "./config"
import { findItemById } from "."

export const createCheckin = async (checkinId, limits) => {
    const { yogaClassId, capacity, contractId, contractLimit } = limits

    await runTransaction(database, async (transaction) => {
        const checkinDoc = doc(collection(database, checkinsCol), checkinId)
        transaction.set(checkinDoc)

        const contractDoc = doc(collection(database, contractsCol), contractId)
        transaction.update(contractDoc, { "currentContract.availableClasses": contractLimit - 1 })

        const classDoc = doc(collection(database, calendarCol), yogaClassId)
        transaction.update(classDoc, { capacity: capacity - 1 })
    })
}

export const deleteCheckin = async (checkinId, limits) => {
    const { yogaClassId, capacity, contractId, contractLimit } = limits

    await runTransaction(database, async (transaction) => {
        const checkinDoc = doc(collection(database, checkinsCol), checkinId)
        transaction.delete(checkinDoc)

        const contractDoc = doc(collection(database, contractsCol), contractId)
        transaction.update(contractDoc, { "currentContract.availableClasses": contractLimit + 1 })

        const classDoc = doc(collection(database, calendarCol), yogaClassId)
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