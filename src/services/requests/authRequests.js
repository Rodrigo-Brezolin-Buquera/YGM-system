
import axios from "axios"
import { setHeaders } from "../../utils/setHeaders"
import { BASE_URL } from "../../constants/baseURL"

export const changePassword = async (id) => {
    await axios.put(`${BASE_URL}/auth/${id}`, {}, setHeaders())
    .then(res => alert("email enviado"))
    .catch(err => alert(err.response.message))
}



