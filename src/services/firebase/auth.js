import axios from "axios";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { BASE_URL } from "../../constants/baseURL";
import { goToAdmin, goToUser } from "../../routes/coordinator";
import { verifyUserPermission } from "../jwt/verifyUserPermission";
import { auth } from "./config";

export const login = async (form, history, setLoading) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then(userCredential => {
    const token = userCredential.user.accessToken
    return axios.post(`${BASE_URL}/auth/login`, {token})
    })
    .then(res=> {
      localStorage.setItem("token", res.data.token) 
      const payload = verifyUserPermission(res.data.token)
      
      if (payload.admin) {
        goToAdmin(history)
      } else {
        goToUser(history, payload.id)
      }
    } )
    .catch((err) => {
      console.log(err.response)
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


