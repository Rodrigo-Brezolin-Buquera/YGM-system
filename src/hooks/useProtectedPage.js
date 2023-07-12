import { useEffect, useState } from "react";
import { isLogged } from "../api/auth";
import { goToLogin } from "../routes/coordinator"
import { useRouter } from 'next/router';


export const useProtectedPage = (role) => {
    const router = useRouter()
    const [status, setStatus] = useState({ loggedIn: null })

    useEffect(() => {
        isLogged(setStatus);
    }, [])

    if (status.loggedIn === false) {
        goToLogin(router)
    }

    let admin
    if (typeof window !== "undefined") {
        admin = localStorage.getItem("admin")
    }
    
    if (status.loggedIn === true) {
        if (role === "user" && admin === "true") {
            goToLogin(router)
        }

        if (role === "admin" && admin === "false") {
            goToLogin(router)
        }
    }
};

