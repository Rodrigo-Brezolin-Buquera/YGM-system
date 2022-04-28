import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import * as jwt from "jsonwebtoken";
import { goToAdmin, goToUser } from '../routes/coordinator';

function useUnprotectedPage() {
    // const history = useHistory()

    // useLayoutEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(token) {
    //         const {role, id} = jwt.verify(token, process.env.JWT_KEY)
           
    //         if(role === "student"){
    //             goToUser(history, id)
    //         } else if ( role === "teacher" || role === "visitor" || role === "admin" ) {
    //             goToAdmin(history)

    //         } else {
    //             alert("authentication problem, try again")
    //         }
    //     }
    // })
}

export default useUnprotectedPage;