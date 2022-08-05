import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"



export const createContract = async (form) => {
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

export const addNewContract = async (form, id) => {
    const URL = `${BASE_URL}/contracts/addNew/${id}`
    axios.put(URL, form, setHeaders() )
        .then(() => console.log("Novo contrato adicionado"))
        .catch((err) => { 
            console.log(err.response)
         })
}

export const editContract = async (form, id) => {
    const URL = `${BASE_URL}/contracts/edit/${id}`
    axios.put(URL, form, setHeaders() )
        .then(() => console.log("Contrato alterado"))
        .catch((err) => { 
            console.log(err.response)
         })
}

export const deleteContract = async (id) => {
    await axios.delete(`${BASE_URL}/contracts/${id}`, setHeaders())
    .then(res => console.log("contrato deletado"))
    .catch(err => console.log(err.response))
}