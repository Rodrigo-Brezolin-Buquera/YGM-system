import {
    FormErrorMessage,
    FormControl,
    Input,
    Text
} from "@chakra-ui/react";

import { emailPattern, passwordPattern, namePattern } from "../../../api/patterns";
import { ModalComponent, FormButton } from "../../../theme";
import { PasswordInput } from "../passwordInput/PasswordInput";
import { useSignupLogic } from "./useSignupLogic";


export const SignupModal = ({ isOpen, onClose }) => {
    const { loading, passwordControl, formControls } = useSignupLogic(onClose)
    const {password, showPassword, setShowPassword, showRepetPassword, setShowRepetPassword } = passwordControl
    const { register, onSubmit, errors, isSubmitting } = formControls

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Preencha seu cadastro"} >
            <form onSubmit={onSubmit} >
                <FormControl
                    isInvalid={errors.name || errors.email || errors.password || errors.repetPassword}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"1em"}
                    minW={"200px"}
                >
                    <Input
                        variant={"outline"}
                        id="name"
                        placeholder="Nome completo"
                        {...register("name", {
                            required: "Campo Obrigátorio",
                            pattern: namePattern
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
                    <PasswordInput
                        setShowPassword={setShowPassword}
                        showPassword={showPassword}
                    >
                        <Input
                            variant={"outline"}
                            id="password"
                            placeholder="senha"
                            type={showPassword ? "text" : "password"}
                            autoComplete="off"
                            {...register("password", {
                                required: "Campo Obrigátorio",
                                pattern: passwordPattern
                            })}
                        />
                    </PasswordInput>

                    <PasswordInput
                        setShowPassword={setShowRepetPassword}
                        showPassword={showRepetPassword}
                    >
                        <Input
                            variant={"outline"}
                            id="repetPassword"
                            placeholder="Repita sua senha"
                            type={showRepetPassword ? "text" : "password"}
                            autoComplete="off"
                            {...register("repetPassword", {
                                required: "Campo Obrigátorio",
                                validate: (value) => value === password || "As senhas não coincidem"
                            })}
                        />
                    </PasswordInput>

                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                        <br />
                        {errors.email && errors.email.message}
                        <br />
                        {errors.password && errors.password.message}
                        <br />
                        {errors.repetPassword && errors.repetPassword.message}
                    </FormErrorMessage>

                    <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading} width={"160px"}>
                        <Text>Criar</Text>
                    </FormButton>
                </FormControl>
            </form>
        </ModalComponent>
    );
};

