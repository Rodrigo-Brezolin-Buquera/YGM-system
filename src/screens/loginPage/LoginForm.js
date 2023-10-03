import {
    FormErrorMessage,
    FormControl,
    Input,
    Text,
    Box
} from "@chakra-ui/react";

import { FormButton } from "../../theme";
import { PasswordInput } from "./PasswordInput";
import { useLoginLogic } from "./useLoginLogic";

export const LoginForm = () => {
    const { loading, passwordControl, formControls } = useLoginLogic()
    const {showPassword, setShowPassword } = passwordControl
    const { register, onSubmit, errors, isSubmitting } = formControls

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            p={"1em"}
            mt={"1em"}
            backgroundColor={"brand.100"}
            borderRadius={"25px"}
            w={"300px"}
        >
            <form onSubmit={onSubmit} >
                <FormControl isInvalid={errors.email || errors.password} >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"1em"}
                        w={"276px"}
                    >
                        <Input
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Campo obrigatório",
                            })}
                            variant="filled"
                            borderRadius={"10px"}

                        />
                        <PasswordInput
                            setShowPassword={setShowPassword}
                            showPassword={showPassword}
                        >
                            <Input
                                id="password"
                                placeholder="Senha"
                                {...register("password", {
                                    required: "Campo obrigatório"

                                })}
                                variant="filled"
                                type={showPassword ? "text" : "password"}
                                borderRadius={"10px"}
                            />
                        </PasswordInput>
                        <FormButton
                            isSubmitting={isSubmitting}
                            color={"brand.200"}
                            loading={loading}
                            width={"120px"}
                        >
                            <Text>Acessar</Text>
                        </FormButton>

                    </Box>
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                        <br />
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>
            </form>

        </Box>
    );
};

