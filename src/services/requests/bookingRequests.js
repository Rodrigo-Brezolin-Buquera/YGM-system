import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"


export const createCheckin = (contractId, yogaClassId) => {
    const URL = `${BASE_URL}/booking`
    const body = {
        contractId,
        yogaClassId
    }
    axios.post(URL, body, setHeaders())
        .then(() => console.log("checkin alterado"))
        .catch((err) => console.log(err.response))
}

export const validateCheckin = (checkinId, verified) => {
    const URL = `${BASE_URL}/booking`
    const body = {
        checkinId,
        verified
    }
    axios.put(URL, body, setHeaders())
        .then(() => console.log("checkin alterado"))
        .catch((err) => console.log(err.response))
}

export const deleteCheckin = (id ) => {
    const URL = `${BASE_URL}/booking/${id}`
    axios.delete(URL, setHeaders())
        .then(() => console.log("checkin deletado"))
        .catch((err) => console.log(err.response))
}