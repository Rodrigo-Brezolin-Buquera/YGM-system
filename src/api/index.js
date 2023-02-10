import { doc, setDoc,getDoc, collection, updateDoc, getDocs, deleteDoc } from "firebase/firestore/lite";
import { database } from "./config";

export const findAllItems = async (itemCol) => {
    const col = collection(database, itemCol);
    const snap = await getDocs(col);
    const result = snap.docs.map((doc) => { return { ...doc.data(), id: doc.id }; });
    return result;
};

export const findItemById = async (itemCol, id) => {
    const docRef = doc(collection(database, itemCol), id);
    const snap = await getDoc(docRef);
    return snap.data();
};

export const findItemWhere = async (itemCol, atribute, value) => {
    const col = collection(database, itemCol);
    const snap = await getDocs(col).where({ [atribute]: value });
    return snap.data();
};
  
export const createItem = async (itemCol, object, id) => {
    const docRef = doc(collection(database, itemCol), id);
    await setDoc(docRef, object);
};

export const updateItem = async (itemCol, object, id) => {
    const docRef = doc(collection(database, itemCol), id);
    await updateDoc(docRef, object);
};

export const updateItemWhere = async (itemCol, object, atribute, value) => {
    const docRef = doc(collection(database, itemCol)); 
    await updateDoc(docRef, object).where({ [atribute]: value });
};

export const deleteItemById = async (itemCol, id) => {
    const docRef = doc(collection(database, itemCol), id);
    await deleteDoc(docRef);
};

export const deleteItemWhere = async (itemCol, atribute, value) => {
    const docRef = doc(collection(database, itemCol));
    await deleteDoc(docRef).where({ [atribute]: value });
};