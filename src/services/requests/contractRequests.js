import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"

export const getAllContracts = () => {
  
    const URL = `${BASE_URL}/contracts/list`
    axios.get(URL)
    .catch((req)=>{
        console.log(req.data)
        return req.data
    })
    .catch((err)=>{
        console.log(err.data)
    })

}