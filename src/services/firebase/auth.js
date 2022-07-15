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
    console.log("fb", token)
    return axios.post(`${BASE_URL}/auth/login`, {token})
    })
    .then(res=> {
      console.log("token", res.data.token)
      localStorage.setItem("token", res.data.token)
      console.log("pós localStorage")
      // const payload = verifyUserPermission(res.data.token)
      // console.log("payload no login", payload)
      // if (payload.admin) {
      //   goToAdmin(history)
      // } else {
      //   goToUser(history, payload.id)
      // }
      goToAdmin(history)
      // goToUser(history, "5c1bd1bf-04b7-47e1-992a-438f1903dc42")
    } )
    .catch((err) => {
      console.log(err.response || err )
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


