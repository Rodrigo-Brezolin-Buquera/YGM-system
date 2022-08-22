import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"

export const createContract = (form, setLoading, goToAdmin, history) => {
    const URL = `${BASE_URL}/contracts`
    axios.post(URL, form, setHeaders() )
        .then(() => {
            setLoading(false)
            alert("Contrato criado")
            goToAdmin(history)
        })
        .catch((err) => { 
            setLoading(false)
            console.log(err.response)
            alert(err.response.message)
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

export const addNewContract = (form, id, setLoading, setAddPlan) => {
    const URL = `${BASE_URL}/contracts/addNew/${id}`
    axios.put(URL, form, setHeaders() )
        .then(() => {
            console.log("Novo contrato adicionado")
            setLoading(false)
            setAddPlan(false)
        })
        .catch((err) => { 
            alert(err.response.message)
            setLoading(false)
         })
}

export const editContract = (form, id, setLoading, setPlan) => {
    const URL = `${BASE_URL}/contracts/edit/${id}`
    axios.put(URL, form, setHeaders() )
        .then(() => {
            console.log("Contrato alterado")
            setLoading(false)
            setPlan(false)
        }
            )
        .catch((err) => {
            setLoading(false) 
            console.log(err.response)
            alert(err.response.message)
         })
}

export const deleteContract = async (id) => {
    await axios.delete(`${BASE_URL}/contracts/${id}`, setHeaders())
    .then(res => console.log("contrato deletado"))
    .catch(err => console.log(err.response))
}