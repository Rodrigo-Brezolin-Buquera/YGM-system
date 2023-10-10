import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { api } from "../api/config";
import confirmDialog from "../components/confirmDialog";
import toastAlert from "../components/toastAlert";
import { goToAdmin } from "../utils/coordinator";
import { getHeaders } from "../utils/storageManager";

export const useDeleteItem = (path, message) => {
    const toast = useToast()
    const router = useRouter()

    const onDelete = () => {
        confirmDialog(message, async () => {
            try {
                await api.delete(path, getHeaders())
                toastAlert(toast, "Item deletado", "sucess")
                setTimeout(() => { goToAdmin(router) }, 300)
            } catch (err) {
                toastAlert(toast, err.response.data || "Error ao deletar item", "error")
            } 
        })
    };

    return { onDelete }
}




