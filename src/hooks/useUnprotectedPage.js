import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {isLogged} from "../api/auth";
import {goToUser, goToAdmin} from "../routes/coordinator"


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

