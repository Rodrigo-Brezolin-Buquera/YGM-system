import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isLogged, refreshAuthToken } from "../api/auth";
import { goToLogin } from "../utils/coordinator"
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
        const refreshInterval = 60 * 60 * 500; 
        setInterval(refreshAuthToken, refreshInterval);

        if (role === "user" && userRole === "admin") {
            goToLogin(router)
        }

        if (role === "admin" && userRole === "user") {
            goToLogin(router)
        }
    }
};

