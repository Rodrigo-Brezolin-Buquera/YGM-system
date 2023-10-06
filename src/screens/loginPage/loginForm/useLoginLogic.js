import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../api/auth";
import toastAlert from "../../../components/toastAlert";

export const useLoginLogic = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
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
            toastAlert(toast, err.response.data, "error");
        } finally {
            setLoading(false);
            reset()
        }
    })

    const passwordControl = { showPassword, setShowPassword }
    const formControls = { register, onSubmit, errors, isSubmitting }

    return { loading, passwordControl, formControls }
}