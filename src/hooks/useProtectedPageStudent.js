import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToAdmin, goToLogin } from '../routes/coordinator';


export const useProtectedPageStudent = () => {
    const history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            goToLogin(history)   
        }   
    })
}

