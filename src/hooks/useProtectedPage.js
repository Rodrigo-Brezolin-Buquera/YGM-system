import { useEffect, useState } from "react";
import { isLogged } from "../api/auth";
import { goToLogin } from "../routes/coordinator"
import { deleteStorageItem, getStorageItem } from "../utils/storageManager";
import { useNavigate } from "react-router-dom";


export const useProtectedPage = (role) => {
    const [status, setStatus] = useState({ loggedIn: null })
    const router = useNavigate()

    useEffect(() => {
        isLogged(setStatus);
    }, [])


    if (status.loggedIn === false) {
        deleteStorageItem("token")
        deleteStorageItem("userRole")
        goToLogin(router) 
    }

    
    if (status.loggedIn === true) {   
        const userRole = getStorageItem("userRole")
     
        if (role === "user" && userRole === "admin") {
            goToLogin(router)
        }

        if (role === "admin" && userRole === "user") {
            goToLogin(router)
        }
    }
};

