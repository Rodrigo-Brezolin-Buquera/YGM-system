import { useEffect, useState } from "react";
import { isLogged } from "../api/auth";
import { goToLogin } from "../utils/coordinator"
import { useRouter } from 'next/router';
import { getStorageItem } from "../utils/storageManager";

export const useProtectedPage = (role) => {
    const [status, setStatus] = useState({ loggedIn: null })
    const router = useRouter()

    useEffect(() => {
        isLogged(setStatus);
    }, [])

    if (status.loggedIn === false) {
        goToLogin(router)
    }

    let userRole = getStorageItem("userRole")
    
    if (status.loggedIn === true) {
        if (role === "user" && userRole === "admin") {
            goToLogin(router)
        }

        if (role === "admin" && userRole === "user") {
            goToLogin(router)
        }
    }
};

