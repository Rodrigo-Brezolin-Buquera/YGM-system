import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_TEST_API_KEY,
    authDomain: "ygm-control.firebaseapp.com",
    projectId: "ygm-control",
    storageBucket: "ygm-control.appspot.com",
    messagingSenderId: "387750336927",
    appId: "1:387750336927:web:8933513bdb4fd0f0f645aa",
    measurementId: "G-X0D2W9CFRW"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_PROD_API_KEY,
//     authDomain: "yoga-mangala.firebaseapp.com",
//     projectId: "yoga-mangala",
//     storageBucket: "yoga-mangala.appspot.com",
//     messagingSenderId: "137752975736",
//     appId: "1:137752975736:web:12f4e14176781452bdd08d",
//     measurementId: "G-KHZH2NY655"
//   };



const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const usersCol =  "users"
export const contractsCol =  "contracts"
export const plansCol =  "plans"
export const calendarCol =  "calendar"
export const checkinsCol =  "checkins"
export const businessCol =  "business"


export const auth = getAuth(app);


