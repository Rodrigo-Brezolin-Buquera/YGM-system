import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator"
import { isLogged } from "../api/auth";


export const useProtectedPage = (role) => {

    const [status, setStatus] = useState({ loggedIn: null })
    const navigate = useNavigate()

    useLayoutEffect(() => {
        isLogged(setStatus);
    }, [])

    if (status.loggedIn === false) {
        goToLogin(navigate)
    }
    const admin = localStorage.getItem("admin")

    if (status.loggedIn === true) {
        if (role === "user" && admin === "true") {
            goToLogin(navigate)
        }

        if(role === "admin" && admin === "false") {
            goToLogin(navigate)

        }
    }
};

