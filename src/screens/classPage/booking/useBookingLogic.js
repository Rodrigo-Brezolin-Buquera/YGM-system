import {  useToast} from "@chakra-ui/react"
import { api } from "../../../api/config"
import toastAlert from "../../../components/toastAlert"
import { useInput } from "../../../hooks/useInput"
import { formatDate } from "../../../utils/dates"
import { getHeaders } from "../../../utils/storageManager"

export const useBookingLogic = (yogaClass, setReload) => {
    const [name, handleName, reset] = useInput("")
    const toast = useToast()

    const addStudent = async () => {
        if(!name) {
            toastAlert(toast, "Preencha um nome", "error")
            return null
        }
        const { date, time, id } = yogaClass
        const body = {
            name,
            date: formatDate(date, "YYYY-MM-DD"),
            time
        }
        try {
            await api.post(`/booking/single/${id}`, body, getHeaders())
            reset()
        } catch (err) {
            toastAlert(toast, err.response.data || "Erro ao adicionar pessoa", "error")
        } finally {
            setReload((prevState)=>!prevState)
        }
    }

    const handleKeyPress = async (e) => {
        if (e.key === "Enter") {
            await addStudent()
        }
    }

    return {name, handleName, addStudent, handleKeyPress}
}

