import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"

export const createClass = (form, setLoading) => {
    const URL = `${BASE_URL}/calendar`
    axios.post(URL, form, setHeaders())
        .then(() => {
            setLoading(false)
            alert("Aulas criadas")
        })
        .catch((err) => {
            setLoading(false)
            alert(err.response.data)
        })
}

export const deleteClassById = (id, setLoading, goBack, history) => {
    const URL = `${BASE_URL}/calendar/${id}`
    axios.delete(URL, setHeaders())
        .then(() => {
            setLoading(false)
            goBack(history)
        })
        .catch((err) => {
            setLoading(false)
            alert(err.response.data)
        })
}

export const deleteClassByGroupId = (id, setLoading, goBack, history) => {
    const URL = `${BASE_URL}/calendar/${id}?allClasses=true`
    axios.delete(URL, setHeaders())
        .then(() => {
            setLoading(false)
            goBack(history)
        })
        .catch((err) => {
            setLoading(false)
            alert(err.response.data)
        })
}