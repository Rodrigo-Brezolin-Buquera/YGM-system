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
    axios.post(URL, setHeaders())
    .then(()=> console.log("Aula deletada"))
    .catch((err)=> console.log(err.message))
}

export const deleteClassByDate = (id, date) => {

    // verificar se o endpoint vai ficar assim ou não (query ou params)
    const fixedDate = date.replaceAll("/", "-")
    const URL = `${BASE_URL}/calendar/${id}&date=${fixedDate}`
    axios.post(URL, setHeaders())
    .then(()=> console.log("Aulas deletadas"))
    .catch((err)=> console.log(err.message))
}