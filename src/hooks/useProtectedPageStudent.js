import { useLayoutEffect } from "react";
import { decodeToken, isExpired } from "react-jwt";
import { useHistory } from "react-router";
import { goToLogin } from "../routes/coordinator";

export const useProtectedPageStudent = () => {
    // const history = useHistory();

    // useLayoutEffect(() => {
    //     const token = localStorage.getItem("token");
       
    //     if (!token) {
    //         goToLogin(history);
    //     }

    //     if (isExpired(token)) {          
    //         console.log("Sessão expirada, faça login novamente");
    //         goToLogin(history);
    //     }
    //     const tokenData = decodeToken(token);
    //     if (tokenData?.admin) {
    //         console.log("Ocorreu um problema, faça login novamente");
    //         goToLogin(history);
    //     }
    // });
};

