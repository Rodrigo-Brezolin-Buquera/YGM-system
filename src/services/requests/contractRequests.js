import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"



export const createContract = (form) => {
    const URL = `${BASE_URL}/contracts`
    axios.post(URL, form, setHeaders() )
        .then(() => console.log("Contrato criado"))
        .catch((err) => { 
            console.log(err.response)
         })
}

export const getContract = (id) => {
    const URL = `${BASE_URL}/contracts/${id}`
    axios.get(URL, setHeaders())
        .then((res) => res.data
        .catch((err) => { 
            console.log(err.response)
         }))
}

export const addNewContract = (form, id) => {
    const URL = `${BASE_URL}/contracts/addNew/${id}`
    axios.put(URL, form, setHeaders() )
        .then(() => console.log("Novo contrato adicionado"))
        .catch((err) => { 
            console.log(err.response)
         })
}

export const editContract = (form, id) => {
    const URL = `${BASE_URL}/contracts/edit/${id}`
    axios.put(URL, form, setHeaders() )
        .then(() => console.log("Contrato alterado"))
        .catch((err) => { 
            console.log(err.response)
         })
}
