import { useState } from "react";
import { api } from "../../../api/config";
import toastAlert from "../../../components/toastAlert";
import { useRequestData } from "../../../hooks/useRequestData";
import { useToast } from "@chakra-ui/react";
import { getHeaders } from "../../../utils/storageManager";
import { useInput } from "../../../hooks/useInput";

export const useMessagesLogic = () => {
    const path = "/messages/welcomeMessage";
    const [actionLoading, setActionLoading] = useState(false);
    const { data, loading } = useRequestData(path, actionLoading);
    const toast = useToast();
    const [input, handleInput, reset] = useInput("");

    const editMessage = async () => {
        try {
            await api.put(path, { message: input }, getHeaders());
            toastAlert(toast, "Mensagem alterada", "success");
        } catch (err) {
            toastAlert(
                toast,
                err.response.data || "Error ao alterar mensagem",
                "error"
            );
        } finally {
            setActionLoading((prevState) => !prevState);
            reset();
        }
    };

    return { message: data, loading, editMessage, handleInput, input };
};
