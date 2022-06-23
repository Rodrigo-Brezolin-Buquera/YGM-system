import { async } from "@firebase/util";
import axios from "axios";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { BASE_URL } from "../../constants/baseURL";
import { auth } from "./config";


export const login = async (form) => {

  signInWithEmailAndPassword(auth, form.email, form.password)
    .then(userCredential => userCredential.user.accessToken)
    .then(token => axios.post(`${BASE_URL}/auth/login`, {token}))
    .then(res=> {
      localStorage.setItem("token", res.data.token)
    } )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

}


export const logout = async () => {
  signOut(auth).then(() => {
    localStorage.removeItem("token")
  }).catch((error) => {
    // An error happened.
  });
}


