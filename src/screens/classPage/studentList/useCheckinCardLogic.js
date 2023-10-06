import {  useToast } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../../../api/config";
import confirmDialog from "../../../components/confirmDialog";
import toastAlert from "../../../components/toastAlert";
import { getHeaders } from "../../../utils/storageManager";

export const useCheckinCardLogic = (checkin, setLoading) => {
    const [cardLoading, setCardLoading] = useState(false);
    const toast = useToast()

    const onDelete = () => {
        confirmDialog("Cancelar este checkin?", async () => {
            const {id, contractId} = checkin
            const path = contractId === "none" ? `/booking/${id}?type=single` : `/booking/${id}`
            setCardLoading(true);
            try {
                api.delete(path, getHeaders())
            } catch (err) {
                toastAlert(toast, err.response.data, "error")
            } finally {
                setCardLoading(false)
                // setLoading((prevState => !prevState))
            }
        })
    }
    return {onDelete, cardLoading}
}

