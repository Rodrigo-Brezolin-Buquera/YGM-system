import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {

};
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const usersCol =  "users"
export const contractsCol =  "contracts"
export const plansCol =  "plans"
export const yogaClassesCol =  "yogaClasses"
export const checkinsCol =  "checkins"


export const auth = getAuth(app);


