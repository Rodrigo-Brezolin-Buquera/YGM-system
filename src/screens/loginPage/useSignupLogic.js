import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { singUp } from "../../api/auth";
import { capitalizeFirstLetter } from "../../utils/names";

export const useSignupLogic = (onClose) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const router = useRouter()
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
            const input = { email, password, name: capitalizeFirstLetter(name) }
            await singUp(input, router)  
        } catch (error) {
            toastAlert(toast, err.message, "error")
        } finally {
            setLoading(false);
            reset()
            onClose()
        }
    })
 
    const passwordControl = {password, showPassword, setShowPassword, showRepetPassword, setShowRepetPassword }
    const formControls = { register, onSubmit, errors, isSubmitting }

    return { loading, passwordControl, formControls }
}