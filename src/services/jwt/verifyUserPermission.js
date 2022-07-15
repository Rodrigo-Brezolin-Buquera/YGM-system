import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const verifyUserPermission = (token) => {
  console.log("token",token, "JWTKEY", process.env.REACT_APP_JWT_KEY )
  const payload = jwt.verify(
    token,
    process.env.REACT_APP_JWT_KEY
    )
  return payload
} 