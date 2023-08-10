import { useEffect, useState } from "react";
import { isLogged } from "../api/auth";
import { goToUser, goToAdmin } from "../routes/coordinator"
import { useRouter } from 'next/router';


export const useUnprotectedPage = () => {
    const router = useRouter()
    
    const [status, setStatus] = useState({ loggedIn: null })

    useEffect(() => {
        isLogged(setStatus);
    }, [])

    if (status.loggedIn === true) {
        let admin
        if (typeof window !== "undefined") {
            admin = localStorage.getItem("admin")
        }
        if (admin === "true") {
            goToAdmin(router)
        }
        if (admin === "false") {
            goToUser(router, status.userId)
        }
    }
}

