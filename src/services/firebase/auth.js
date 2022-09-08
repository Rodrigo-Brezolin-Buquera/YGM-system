import axios from "axios";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { BASE_URL } from "../../constants/baseURL";
import { goToAdmin, goToUser } from "../../routes/coordinator";

import { auth } from "./config";

export const login = async (form, history, goToPage, setLoading) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then(userCredential => {
    const token = userCredential.user.accessToken
    return axios.post(`${BASE_URL}/auth/login`, {token})
    })
    .then(res=> {
      localStorage.setItem("token", res.data.token) 
      goToPage(history)
      
    } )
    .catch((err) => {
      console.log(err.response)
      alert("Erro no login, tente novamente")
      setLoading(false)
    });
}

export const logout = async () => {
  signOut(auth).then(() => {
    localStorage.removeItem("token")
  }).catch((err) => {
    console.log(err.response)
  });
}


