import {  useToast} from "@chakra-ui/react"
import { useInput } from "../../../hooks/useInput"
import toastAlert from "../../../components/toastAlert"
import { api } from "../../../api/config"
import { getHeaders } from "../../../utils/storageManager"
import { formatDate } from "../../../utils/dates"

export const useBookingLogic = (yogaClass, setReload) => {
    const [name, handleName, reset] = useInput("")
    const toast = useToast()

    const addStudent = async () => {
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
            toastAlert(toast, err.response.data, "error")
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

