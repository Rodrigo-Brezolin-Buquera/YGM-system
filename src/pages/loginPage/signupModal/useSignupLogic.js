import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { singUp } from "../../../api/auth";
import toastAlert from "../../../components/toastAlert";
import { useNavigate } from "react-router-dom";


export const useSignupLogic = (onClose) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const router = useNavigate()
    const [showRepetPassword, setShowRepetPassword] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
        watch
    } = useForm();

    const password = watch("password")

    const onSubmit = handleSubmit(async ({ email, password, name }) => {
        try {
            const input = { email, password, name }
            await singUp(input, router)  
            reset()
            onClose()
        } catch (err) {
            toastAlert(toast, err.message, "error")
        } finally {
            setLoading(false);
        }
    })
 
    const passwordControl = {password, showPassword, setShowPassword, showRepetPassword, setShowRepetPassword }
    const formControls = { register, onSubmit, errors, isSubmitting }

    return { loading, passwordControl, formControls }
}