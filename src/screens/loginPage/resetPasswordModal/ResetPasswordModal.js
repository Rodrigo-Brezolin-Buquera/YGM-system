import {
    FormErrorMessage,
    FormControl,
    Input,
    Text
} from "@chakra-ui/react";

import { emailPattern } from "../../../utils/patterns";
import { ModalComponent, FormButton } from "../../../theme";
import { useResetPasswordLogic } from "./useResetPasswordLogic";


export const ResetPasswordModal = ({ isOpen, onClose }) => {
    const { loading, formControls } = useResetPasswordLogic(onClose)
    const { register, onSubmit, errors, isSubmitting } = formControls

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Insira seu email"} >
            <form onSubmit={onSubmit} >
                <FormControl
                    isInvalid={errors.email }
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"1em"}
                    minW={"200px"}
                >
                    <Input
                        variant={"outline"}
                        id="email"
                        placeholder="email"
                        {...register("email", {
                            required: "Campo Obrigátorio",
                            pattern: emailPattern
                        })}
                    />

                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>

                    <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading} width={"160px"}>
                        <Text>Enviar link</Text>
                    </FormButton>
                </FormControl>
            </form>


        </ModalComponent>
    )
}

