
import axios from "axios"
import { setHeaders } from "../../utils/setHeaders"
import { BASE_URL } from "../../constants/baseURL"

export const changePassword = async (id) => {
    await axios.put(`${BASE_URL}/auth/${id}`, {}, setHeaders())
    .then(res => console.log("email enviado"))
    .catch(err => console(err.response))
}

export const deleteContract = async (id) => {
    await axios.delete(`${BASE_URL}/auth/${id}`, setHeaders())
    .then(res => console.log("contrato deletado"))
    .catch(err => console(err.response))
}

