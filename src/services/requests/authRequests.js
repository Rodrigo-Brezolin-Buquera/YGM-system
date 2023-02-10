
import axios from "axios";
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"

export const changePassword = async (id) => {
    await axios.put(`${BASE_URL}/auth/${id}`, {} setHeaders())
    .then( => alert("email enviado"))
        .catch(err => alert(err.response.message));
};



