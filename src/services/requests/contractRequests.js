import axios from "axios"
import { BASE_URL } from "../../constants/baseURL"
import { setHeaders } from "../../utils/setHeaders"

export const createContract =  (form, goToAdmin, history,setLoading) => {
    const URL = `${BASE_URL}/contracts`
    axios.post(URL, form, setHeaders() )
        .then(() => {
            alert("Contrato criado")
            setLoading(false)
            goToAdmin(history)
        })
        .catch((err) => { 
            setLoading(false)
            console.log(err.response)
            alert(err.response.data)
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
            alert(err.response.data)
            setLoading(false)
         })
}

export const editContract = (form, id, setPlan, setLoading) => {
    const URL = `${BASE_URL}/contracts/edit/${id}`
    form.active =  form.active === "true"
    axios.put(URL, form, setHeaders() )
        .then(() => {
            alert("Contrato alterado")
            setPlan(false)
        }
            )
        .catch((err) => { 
            console.log(err.response)
            alert(err.response.data )
           
         })
}

export const deleteContract = async (id) => {
    await axios.delete(`${BASE_URL}/contracts/${id}`, setHeaders())
    .then(res => console.log("contrato deletado"))
    .catch(err => console.log(err.response))
}