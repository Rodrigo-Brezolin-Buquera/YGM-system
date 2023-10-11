import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isLogged } from "../api/auth";
import { goToLogin } from "../utils/coordinator"
import { deleteStorageItem, getStorageItem } from "../utils/storageManager";

export const useProtectedPage = (role) => {
    const [status, setStatus] = useState({ loggedIn: null })
    const router = useRouter()

    useEffect(() => {
        isLogged(setStatus);
    }, [])


    if (status.loggedIn === false) {
        deleteStorageItem("token")
        deleteStorageItem("userRole")
        goToLogin(router) 
    }

    
    if (status.loggedIn === true) {   
        let userRole = getStorageItem("userRole")
     
        if (role === "user" && userRole === "admin") {
            goToLogin(router)
        }

        if (role === "admin" && userRole === "user") {
            goToLogin(router)
        }
    }
};

