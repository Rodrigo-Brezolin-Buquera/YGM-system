import {  useToast } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../../../api/config";
import confirmDialog from "../../../components/confirmDialog";
import toastAlert from "../../../components/toastAlert";
import { getHeaders } from "../../../utils/storageManager";

export const useCheckinCardLogic = (checkin, setReload) => {
    const [loading, setLoading] = useState(false);
    const toast = useToast()

    const onDelete = () => {
        confirmDialog("Cancelar este checkin?", async () => {
            const {id, contractId} = checkin
            const path = contractId === "none" ? `/booking/${id}?type=single` : `/booking/${id}`
            setLoading(true);
            try {
                await api.delete(path, getHeaders())
            } catch (err) {
                toastAlert(toast, err.response.data ||  "Erro ao deletar", "error")
            } finally {
                setLoading(false)
                setReload((prevState)=>!prevState)
            }
        })
    }
    return {onDelete, loading}
}

