import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import {setHeaders} from "../../utils/setHeaders"

export const createClass = (form) => {
    const URL = `${BASE_URL}/calendar`
    axios.post(URL, form, setHeaders())
    .then(()=> console.log("Aulas criadas"))
    .catch((err)=> console.log(err.message))
}

export const deleteClassById = (id) => {
    const URL = `${BASE_URL}/calendar/${id}`
    axios.delete(URL, setHeaders())
    .then(()=> console.log("Aula deletada"))
    .catch((err)=> console.log(err.message))
}

export const deleteClassByGroupId = (id) => {
    const URL = `${BASE_URL}/calendar/${id}?allClasses=true`
    axios.delete(URL, setHeaders())
    .then(()=> console.log("Aulas deletadas"))
    .catch((err)=> console.log(err.message))
}