import { useRequestData } from "../../../hooks/useRequestData"
import confirmDialog from "../../../components/confirmDialog";
import { useToast } from "@chakra-ui/react";
import toastAlert from "../../../components/toastAlert";
import { api } from "../../../api/config";
import { getHeaders } from "../../../utils/storageManager";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const usePlansLogic = () => {
    const [actionLoading, setActionLoading] = useState(false);
    const {data, loading } = useRequestData("plans", actionLoading)
    const toast = useToast()
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const deletePlan = (id) => {
        confirmDialog("Deletar plano?", async () => {
            try {
                await api.delete(`/plans/${id}`, getHeaders())
                toastAlert(toast, "Plano removido", "success")
            } catch (err) {
                toastAlert(toast, err.response.data, "error")
            } finally {
                setActionLoading((prevState)=> !prevState)
            }
        })
    }

    const onSubmit = handleSubmit(async (values) => {
        try {
            await api.post(`/plans`, values, getHeaders())
            reset()
        } catch (err) {
            toastAlert(toast, err.response.data, "error")
        } finally {
            setActionLoading((prevState)=> !prevState)
        }
    })
 
    const formControls = { register, onSubmit, errors, isSubmitting }

    return {plans: data, deletePlan, loading, formControls }
}

