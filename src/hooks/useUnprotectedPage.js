import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {goToUser, goToAdmin} from "../routes/coordinator"
import {isLogged} from "../api/auth";


export const useUnprotectedPage = () =>  {
    const [status, setStatus] = useState({ loggedIn: null })
    const navigate = useNavigate()

    useLayoutEffect(() => {         
        isLogged(setStatus);     
    },[])

    if(status.loggedIn === true) {
        const admin = localStorage.getItem("admin")
        admin === "true" ? goToAdmin(navigate) : goToUser(navigate, status.userId)
    }
}

