import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "ygm-control.firebaseapp.com",
    projectId: "ygm-control",
    storageBucket: "ygm-control.appspot.com",
    messagingSenderId: "387750336927",
    appId: "1:387750336927:web:8933513bdb4fd0f0f645aa",
    measurementId: "G-X0D2W9CFRW"
};
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const usersCol =  "users"
export const contractsCol =  "contracts"
export const plansCol =  "plans"
export const yogaClassesCol =  "yogaClasses"
export const checkinsCol =  "checkins"


export const auth = getAuth(app);


