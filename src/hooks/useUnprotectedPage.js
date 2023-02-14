import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isLogged } from "../api/auth";
import { goToAdmin, goToUser } from "../routes/coordinator";

export const useUnprotectedPage = () =>  {
    // const [status, setStatus] = useState({ loggedIn: null })
    // const navigate = useNavigate()

    // useLayoutEffect(() => {         
    //     isLogged(setStatus);     
    // },[])

    // if(status.loggedIn === true) {
    //     status.role === "user" ? goToUser(navigate, status.userId) : goToAdmin(navigate)
    // }
}

