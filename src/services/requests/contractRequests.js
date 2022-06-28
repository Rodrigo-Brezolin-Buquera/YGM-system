import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import {setHeaders} from "../../utils/setHeaders"

export const getAllContracts = (setState) => {
    const URL = `${BASE_URL}/contracts/list`
    axios.get(URL, setHeaders())
    .then((res)=>{
        setState(res.data)
    })    
    .catch((err)=>{
        console.log(err.data)
    })
}