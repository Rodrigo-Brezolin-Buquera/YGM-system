import {
    FormErrorMessage,
    FormControl,
    Input,
    Text,
    Box
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import { FormButton } from "../../theme";
import { PasswordInput } from "./PasswordInput";

export const LoginForm = ({ navigate }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = async (values) => {
        setLoading(true);
        await login(values, navigate)
            .then(reset())
            .catch((err) => setError(err.message))
            .finally(setLoading(false));
    };

    return (
        <>
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
                <form onSubmit={handleSubmit(onSubmit)} >
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
            {error ? <Text fontWeight={"bold"} color={"red"} m={"1em"}> {error}</Text> : null}
        </>
    );
};

