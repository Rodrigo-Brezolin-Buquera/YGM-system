import { useEffect, useState } from "react";
import { isLogged, refreshAuthToken } from "../api/auth";
import { goToUser, goToAdmin } from "../routes/coordinator"
import { getStorageItem } from "../utils/storageManager";
import { useNavigate } from "react-router-dom";


export const useUnprotectedPage = async () => {
    const [status, setStatus] = useState({ loggedIn: null, user: null })
    const router = useNavigate()

    useEffect(() => {
        isLogged(setStatus);
    }, [])

    if (status.loggedIn === true) {
        const userRole = getStorageItem("userRole")
        await refreshAuthToken(status.user)

        if (userRole === "admin") {
            goToAdmin(router)
        }
        if (userRole === "user") {
            const id = status.user.uid
            goToUser(router, id)
        }
    }
}

