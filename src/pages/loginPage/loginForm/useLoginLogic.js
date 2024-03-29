import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../api/auth";
import toastAlert from "../../../components/toastAlert";
import { useNavigate } from "react-router-dom";


export const useLoginLogic = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const router = useNavigate()
    const toast = useToast()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        try {
            await login(values, router)
        } catch (err) {
            toastAlert(toast, err.message, "error");
        } finally {
            setLoading(false);
            reset()
        }
    })

    const passwordControl = { showPassword, setShowPassword }
    const formControls = { register, onSubmit, errors, isSubmitting }

    return { loading, passwordControl, formControls }
}