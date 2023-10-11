import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendResetPasswordLink } from "../../../api/auth";
import toastAlert from "../../../components/toastAlert";

export const useResetPasswordLogic = (onClose) => {
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = handleSubmit(async ({email}) => {
        setLoading(true)
        try {
            await sendResetPasswordLink(email )
            toastAlert(toast, "O link foi enviado para seu email", "success");
            reset()
            onClose()        
        } catch (err) {
            toastAlert(toast, err.message || "Erro ao enviar email, tente novamente", "error");
        } finally {
            setLoading(false);
        }
    })

    const formControls = { register, onSubmit, errors, isSubmitting }
    
    return { loading, formControls }
}