
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDFcy2h2lVirgDfDYB8kIPfGKtuhoXzFro",
  authDomain: "ygm-control.firebaseapp.com",
  projectId: "ygm-control",
  storageBucket: "ygm-control.appspot.com",
  messagingSenderId: "387750336927",
  appId: "1:387750336927:web:8933513bdb4fd0f0f645aa",
  measurementId: "G-X0D2W9CFRW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



