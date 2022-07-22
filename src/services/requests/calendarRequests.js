import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import {setHeaders} from "../../utils/setHeaders"

export const createClass = async (form) => {
    const URL = `${BASE_URL}/calendar`
   await axios.post(URL, form, setHeaders())
    .then(()=> console.log("Aulas criadas"))
    .catch((err)=> console.log(err.message))
}

export const deleteClassById = async (id) => {
    const URL = `${BASE_URL}/calendar/${id}`
   await axios.delete(URL, setHeaders())
    .then(()=> console.log("Aula deletada"))
    .catch((err)=> console.log(err.message))
}

export const deleteClassByGroupId =  async(id) => {
    const URL = `${BASE_URL}/calendar/${id}?allClasses=true`
   await axios.delete(URL, setHeaders())
    .then(()=> console.log("Aulas deletadas"))
    .catch((err)=> console.log(err.message))
}