import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToAdmin, goToLogin } from '../routes/coordinator';
import { verifyUserPermission } from '../services/jwt/verifyUserPermission';

export const useProtectedPageStudent = () => {
    const history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            goToLogin(history)   
        } else {
            const { admin, id } = verifyUserPermission(token, history)
            if (id && admin) {
                goToAdmin(history)
            } 
        }   
    })
}

