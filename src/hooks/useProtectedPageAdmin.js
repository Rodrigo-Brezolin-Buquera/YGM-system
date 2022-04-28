import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToLogin, goToUser } from '../routes/coordinator';
import * as jwt from "jsonwebtoken";

export const useProtectedPageAdmin = () => {
    // const history = useHistory()
    
    // useLayoutEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(!token) {
    //         goToLogin(history)   
    //     } else {    
    //         const { role, id } = jwt.verify(token, process.env.REACT_APP_JWT_KEY)
    //         if (role === "student") {
    //             goToUser(history, id)
    //         } 
    //     }  
    // })
}

