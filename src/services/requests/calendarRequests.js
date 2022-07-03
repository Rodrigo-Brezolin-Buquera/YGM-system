import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import {setHeaders} from "../../utils/setHeaders"

export const createClass = (form) => {
    const URL = `${BASE_URL}/calendar`
    axios.post(URL, form, setHeaders())
    .then(()=> console.log("Aulas criadas"))
    .catch((err)=> console.log(err))
}