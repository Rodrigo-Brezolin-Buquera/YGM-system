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
    localStorage.clear()
    goToLogin(history)
    console.log(error.response)
    // alert(("Sessão expirada, faça o login novamente"))
  }
}

