import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"

export const createClass = (form, setLoading) => {
    const URL = `${BASE_URL}/calendar`
    axios.post(URL, form, setHeaders())
        .then(() => {
            console.log("Aulas criadas")
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
            alert(err.response.message)
        })
}

export const deleteClassById = (id, setLoading, goBack, history) => {
    const URL = `${BASE_URL}/calendar/${id}`
    axios.delete(URL, setHeaders())
        .then(() => {
            setLoading(false)
            console.log("Aula deletada")
            goBack(history)
        })
        .catch((err) => {
            setLoading(false)
            alert(err.response.message)
        })
}

export const deleteClassByGroupId = (id, setLoading, goBack, history) => {
    const URL = `${BASE_URL}/calendar/${id}?allClasses=true`
    axios.delete(URL, setHeaders())
        .then(() => {
            setLoading(false)
            console.log("Aulas deletadas")
            goBack(history)
        })
        .catch((err) => {
            setLoading(false)
            alert(err.response.message)
        })
}