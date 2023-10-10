import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isLogged, refreshAuthToken } from "../api/auth";
import { goToUser, goToAdmin } from "../utils/coordinator"
import { getStorageItem } from "../utils/storageManager";

export const useUnprotectedPage = () => {
    const [status, setStatus] = useState({ loggedIn: null, user: null })
    const router = useRouter()

    useEffect(() => {
        isLogged(setStatus);
    }, [])

    if (status.loggedIn === true) {
        let userRole = getStorageItem("userRole")
        refreshAuthToken(status.user)

       
        if (userRole === "admin") {
            goToAdmin(router)
        }
        if (userRole === "user") {
            const id = status.user.uid
            goToUser(router, id)
        }
    }
}

