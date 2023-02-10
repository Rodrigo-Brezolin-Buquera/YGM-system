import { doc, setDoc,getDoc, collection, updateDoc, getDocs, deleteDoc } from "firebase/firestore/lite";
import { database } from "./config";

export const findAllItems = async (itemCol) => {
    const col = collection(database, itemCol);
    const snap = await getDocs(col);
    const result = snap.docs.map((doc) => { return { ...doc.data(), id: doc.id }; });
    return result;
};

export const findItemById = async (itemCol, id) => {
    const col = collection(database, itemCol);
    const snap = await getDoc(col, id);
    return snap.data();
};

export const findItemWhere = async (itemCol, atribute, value) => {
    const col = collection(database, itemCol);
    const snap = await getDocs(col).where({ [atribute]: value });
    return snap.data();
};
  
export const createItem = async (itemCol, object, id) => {
    const col = collection(database, itemCol);
    const docRef = doc(col, id);
    await setDoc(docRef, object);
};

export const updateItem = async (itemCol, object, id) => {
    const col = collection(database, itemCol);
    const docRef = doc(col, id);
    await updateDoc(docRef, object);
};

export const updateItemWhere = async (itemCol, object, atribute, value) => {
    const col = collection(database, itemCol);
    const docRef = doc(col); 
    await updateDoc(docRef, object).where({ [atribute]: value });
};

export const deleteItemById = async (itemCol, id) => {
    const col = collection(database, itemCol);
    const docRef = doc(col, id);
    await deleteDoc(docRef);
};

export const deleteItemWhere = async (itemCol, atribute, value) => {
    const col = collection(database, itemCol);
    const docRef = doc(col);
    await deleteDoc(docRef).where({ [atribute]: value });
};