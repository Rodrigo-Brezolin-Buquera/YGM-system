import { useEffect, useState } from "react";
import { isLogged } from "../api/auth";
import { goToUser, goToAdmin } from "../routes/coordinator"
import { useRouter } from 'next/router';
import { getStorageItem } from "../utils/storageManager";


export const useUnprotectedPage = () => {
    // const router = useRouter()
    
    // const [status, setStatus] = useState({ loggedIn: null })

    // useEffect(() => {
    //     isLogged(setStatus);
    // }, [])

    // if (status.loggedIn === true) {
    //     let userRole = getStorageItem("userRole")
       
    //     if (userRole === "admin") {
    //         goToAdmin(router)
    //     }
    //     if (userRole === "user") {
    //         goToUser(router, status.userId)
    //     }
    // }
}

