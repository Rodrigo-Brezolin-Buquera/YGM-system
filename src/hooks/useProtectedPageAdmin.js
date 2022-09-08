import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToLogin, goToUser } from '../routes/coordinator';


export const useProtectedPageAdmin = () => {
    const history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            goToLogin(history)   
        }  
    })
}

