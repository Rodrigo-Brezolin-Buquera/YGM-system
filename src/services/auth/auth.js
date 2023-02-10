import axios from "axios";
import { decodeToken } from "react-jwt";
import { BASE_URL } from "../../constants/baseURL";
import { goToAdmin, goToUser } from "../../routes/coordinator";

export const login = async (form, history, setLoading) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/login`, form);

        localStorage.setItem("token", data.token);

        const tokenData = decodeToken(data.token);

        tokenData.admin ? goToAdmin(history) : goToUser(history, tokenData.id);
    } catch (err) {
        console.log(err.response);
        alert("Erro no login, tente novamente");
        setLoading(false);
    }
};

export const logout = async () => {
    localStorage.removeItem("token");
};


