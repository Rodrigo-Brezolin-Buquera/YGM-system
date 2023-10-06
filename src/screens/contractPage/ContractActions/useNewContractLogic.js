import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../../api/config";
import toastAlert from "../../../components/toastAlert";
import { getHeaders } from "../../../utils/storageManager";

export const useNewContractLogic = (id, name, onClose) => {
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
            started: values.date
        }

        try {
            name === "" ? 
                await api.put(`/contracts/changePlan/${id}`, body, getHeaders())
                :
                await api.post(`/contracts/${id}`, body, getHeaders())

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

