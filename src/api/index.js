import { doc, setDoc,getDoc, collection, updateDoc, getDocs, deleteDoc, where, query, limit, writeBatch,  } from "firebase/firestore/lite";
import { database } from "./config";

export const findAllItems = async (itemCol) => {
    const col = collection(database, itemCol);
    const snap = await getDocs(col);
    const result = snap.docs.map(doc => {return {...doc.data(), id: doc.id}});
    return result;
};

export const findItemById = async (itemCol, id) => {
    const docRef = doc(collection(database, itemCol), id);
    const snap = await getDoc(docRef);
    return {...snap.data(), id};
};

export const findItemWhere = async (itemCol, atribute, value) => {
    const col = collection(database, itemCol);
    const q = query(col, where(atribute, "==", value));
    const snap = await getDocs(q);
    const result = snap.docs.map(doc => {return {...doc.data(), id: doc.id}} )
    return result;
};


export const createItem = async (itemCol, object) => {
    const docRef = doc(collection(database, itemCol) ) ;
    await setDoc(docRef, object);
};

export const createItemWithId = async (itemCol, object, id) => {
    const docRef = doc(collection(database, itemCol), id ) ;
    await setDoc(docRef, object);
};

export const updateItem = async (itemCol, object, id) => {
    const docRef = doc(collection(database, itemCol), id);
    await updateDoc(docRef, object);
};

export const deleteItemById = async (itemCol, id) => {
    const docRef = doc(collection(database, itemCol), id);
    await deleteDoc(docRef);
};

export const deleteItemWhere = async (itemCol, atribute, value) => {
    const list = await findItemWhere(itemCol, atribute, value)
    const batch = writeBatch(database)

    list.forEach(item => {
        const docRef = doc(collection(database, itemCol), item.id);
        batch.delete(docRef )
    })

    await batch.commit();
};