import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../../../api/config";
import confirmDialog from "../../../components/confirmDialog";
import toastAlert from "../../../components/toastAlert";
import { useRequestData } from "../../../hooks/useRequestData";
import { formatDate } from "../../../utils/dates";
import { getHeaders } from "../../../utils/storageManager";

export const useCheckinLogic = (checkinData) => {
    const {  capacity, classId, contractId, name, time, date, plan } =  checkinData;
    const checkinId = `${contractId}+${classId}`;
    const [loading, setLoading] = useState(false);
    const {data} = useRequestData (`/booking/${checkinId}`, loading) 
    const checkinExists = data ? true : false
    const toast = useToast()

    const onDelete =  async () => {
        setLoading(true);
        try {
            await api.delete(`/booking/${checkinId}` , getHeaders())
            toastAlert(toast, "Checkin cancelado", "success")
        } catch (err) {
            toastAlert(toast, err.response.data || "Erro ao cancelar checkin", "error")
        } finally {
            setLoading(false)

        }
    }

    const onCreate = async () => {
        setLoading(true);
        const body ={
            date: formatDate(date, "YYYY-MM-DD"), 
            name, 
            time, 
            plan
        }
        try {
            await api.post(`/booking/${classId}`, body , getHeaders())
            toastAlert(toast, "Checkin realizado", "success")
        } catch (err) {
            toastAlert(toast, err.response.data || "Erro ao fazer checkin", "error")
        } finally {
            setLoading(false)
        }  
    }
    
    const handleCheckin = () => {
        if (capacity === 0) return null

        if (checkinExists) {
            confirmDialog("Cancelar check-in?", onDelete)
        } else {
            confirmDialog("Fazer check-in?", onCreate)
        }
    };

    return {handleCheckin, loading, checkinExists}
}

