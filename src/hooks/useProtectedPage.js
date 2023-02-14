import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isLogged } from "../api/auth";
import { goToLogin } from "../routes/coordinator";

export const useProtectedPage = (role) => {
  
    // const [status, setStatus] = useState({ loggedIn: null })
    // const navigate = useNavigate()

    // useLayoutEffect(() => {  
    //     isLogged(setStatus);   
    // },[])

    // if(status.loggedIn === false) {
    //     goToLogin(navigate)
    // }

    // if(status.loggedIn === true && status.role!== role) { 
    //     goToLogin(navigate)
    // }
};

