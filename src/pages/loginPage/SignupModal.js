import {
    FormErrorMessage,
    FormControl,
    Input,
     Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { singUp, genPassword } from "../../api/auth";
import { emailPattern, passwordPattern, stringPattern } from "../../api/patterns";
import { goToUser } from "../../routes/coordinator";
import { ModalComponent, FormButton } from "../../theme";

export const SignupModal = ({ isOpen, onClose, navigate }) => {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
        watch
    } = useForm();

    const onSubmit = ({email, name, password}) => {
        setLoading(true);
        singUp({ email, password, name })
            .then((id)=> goToUser(navigate, id))
            .catch((err) => alert(err.message))
            .finally(() => {
                setLoading(false)
                reset()
                onClose() 
            })
    };
    const password = watch("password")
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Preencha seus dados"} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                    isInvalid={errors.name || errors.email || errors.password || errors.repetPassword}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"1em"}
                    minW={"300px"}
                >
                    <Input
                        variant={"outline"}
                        id="name"
                        placeholder="Nome completo"
                        {...register("name", {
                            required: "Campo Obrigátorio",
                            pattern: stringPattern
                        })}
                    />

                    <Input
                        variant={"outline"}
                        id="email"
                        placeholder="email"
                        {...register("email", {
                            required: "Campo Obrigátorio",
                            pattern: emailPattern
                        })}
                    />

                    <Input
                        variant={"outline"}
                        id="password"
                        placeholder="senha"
                        type={"password"}
                        {...register("password", {
                            required: "Campo Obrigátorio",
                            pattern: passwordPattern
                        })}
                    />

                    <Input
                        variant={"outline"}
                        id="repetPassword"
                        placeholder="Repita sua senha"
                        type={"password"}

                        {...register("repetPassword", {
                            required: "Campo Obrigátorio",
                            pattern: passwordPattern,
                            validate: (value) => value === password || "As senhas não coincidem"
                        })}
                    />

                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                        <br />
                        {errors.email && errors.email.message}
                        <br />
                        {errors.password && errors.password.message}
                        <br />
                         {errors.repetPassword && errors.repetPassword.message}
                    </FormErrorMessage>
                </FormControl>

                <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading}>
                    <Text>Criar</Text>
                </FormButton>
            </form>

        </ModalComponent>


    );
};

