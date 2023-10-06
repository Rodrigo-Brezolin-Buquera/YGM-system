import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../../api/config";
import confirmDialog from "../../../components/confirmDialog";
import toastAlert from "../../../components/toastAlert";
import { useRequestData } from "../../../hooks/useRequestData"
import { getHeaders } from "../../../utils/storageManager";

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
            await api.post("/plans", values, getHeaders())
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

