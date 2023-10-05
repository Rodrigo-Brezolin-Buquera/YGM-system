import { useToast } from "@chakra-ui/react";
import toastAlert from "../../../components/toastAlert";
import { api } from "../../../api/config";
import { getHeaders } from "../../../utils/storageManager";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const useNewContractLogic = (path, name, onClose) => {
    const [loading, setLoading] = useState(false);
    const toast = useToast()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        setLoading(true)
        const body = {
                name,
                plan: values.plan,
                date: values.date
        }
        try {
            await api.post(path, body, getHeaders())
            toastAlert(toast, "Contrato criado", "success")
            reset()
            onClose()
        } catch (err) {
            toastAlert(toast, err.response.data, "error")
        } finally {
            setLoading(false)
        }
    })

    const formControls = { register, onSubmit, errors, isSubmitting }

    return { loading, formControls }


}

