import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ygm-control.firebaseapp.com",
  projectId: "ygm-control",
  storageBucket: "ygm-control.appspot.com",
  messagingSenderId: "387750336927",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-X0D2W9CFRW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



