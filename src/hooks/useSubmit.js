import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import toastAlert from "../components/toastAlert";

export const useSubmit = ({ mainHandler, successHandler, errorHandler, finallyHandler }) => {
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const onSubmit = async () => {
        setLoading(true);
        try {
            await mainHandler();
            successHandler();
        } catch (err) {
            errorHandler()
            toastAlert(toast, err.message, "error");
        } finally {
            finallyHandler()
            setLoading(false);
        }
    };

    return { loading }
}
