import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToAdmin, goToLogin } from '../routes/coordinator';
import * as jwt from "jsonwebtoken";

export const useProtectedPageStudent = () => {
    // const history = useHistory()
    
    // useLayoutEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(!token) {
    //         goToLogin(history)   
    //     } else {
    //         const { role } = jwt.verify(token, process.env.REACT_APP_JWT_KEY)
    //         if (role === "teacher" || role === "visitor" || role === "admin") {
    //             goToAdmin(history)
    //         } 
    //     }   
    // })
}

