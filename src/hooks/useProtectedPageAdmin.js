import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToLogin, goToUser } from '../routes/coordinator';
import { verifyUserPermission } from '../services/jwt/verifyUserPermission';

export const useProtectedPageAdmin = () => {
    const history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            goToLogin(history)   
        } else {    
            const { admin, id } = verifyUserPermission(token)
            if (id && !admin) {
                goToUser(history, id)
            } 
        }  
    })
}

