import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { goToLogin } from "../../routes/coordinator"

dotenv.config()

export const verifyUserPermission = (token, history) => {
  try {
    const payload = jwt.verify(
      token,
      process.env.REACT_APP_JWT_KEY
    )
    return payload
  } catch (error) {
     if(error === jwt.TokenExpiredError()){
       alert("Sessão expirada, faça o login novamente")
     } else {
       alert(("Ocorreu um erro, tente novamente"))
     }
     console.log(error)
     localStorage.clear()
     goToLogin(history)
  }

} 

