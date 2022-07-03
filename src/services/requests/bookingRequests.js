import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"

export const validateCheckin = (id, verified) => {
    const URL = `${BASE_URL}/booking`
    const body = {
        checkinId: id,
        verified
    }
    axios.put(URL, body, setHeaders())
        .then(() => console.log("checkin alterado"))
        .catch((err) => console.log(err.message))
}

export const deleteCheckin = (id ) => {
    const URL = `${BASE_URL}/booking/${id}`
    axios.delete(URL, setHeaders())
        .then(() => console.log("checkin deletado"))
        .catch((err) => console.log(err.message))
}