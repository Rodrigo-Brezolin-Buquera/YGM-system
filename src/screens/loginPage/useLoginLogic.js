import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import { useSubmit } from "../../hooks/useSubmit";

export const useLoginLogic = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();


    const onSubmit = handleSubmit(async (values) => {
        await login(values, router)
    })

    const { loading } = useSubmit({
        mainHandler: onSubmit,
        successHandler: reset
    })

    const passwordControl = {showPassword, setShowPassword}
    const formControls = {register, onSubmit, errors, isSubmitting}

    return { loading, passwordControl, formControls }
}