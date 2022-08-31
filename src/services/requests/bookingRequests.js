import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"

export const createCheckin = async (contractId, yogaClassId) => {
    const URL = `${BASE_URL}/booking`
    const body = {
        contractId,
        yogaClassId
    }
    await axios.post(URL, body, setHeaders())
        .then(() => console.log("checkin alterado"))
        .catch((err) => {
            console.log(err.response)
            alert(err.response.message)
        })
}

export const validateCheckin = async (checkinId, verified) => {
    const URL = `${BASE_URL}/booking`
    const body = {
        checkinId,
        verified
    }
    await axios.put(URL, body, setHeaders())
        .then(() => console.log("checkin alterado"))
        .catch((err) => {
            console.log(err.response)
            alert(err.response.message)
        })
}

export const deleteCheckin = async (id) => {
    const URL = `${BASE_URL}/booking/${id}`
    await axios.delete(URL, setHeaders())
        .then(() => console.log("checkin deletado"))
        .catch((err) => {
            console.log(err.response)
            alert(err.response.message)
        })
}