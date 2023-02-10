import {
    FormErrorMessage,
    FormControl,
    Input,
    Button, Text, CircularProgress, Box
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import { colors } from "../../theme/colors";


export const LoginForm = ({ navigate }) => {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = async (values) => {
        setLoading(true);
        await login(values, navigate)
        reset();
    };

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            p={"1em"}
            mt={"1em"}
            backgroundColor={colors.primary}
            borderRadius={"25px"}
        >
            <form onSubmit={handleSubmit(onSubmit)} >
                <FormControl isInvalid={errors.email || errors.password}>
                    <Box
                        minW={"250px"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"0.5em"}
                    >
                        <Input
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Campo obrigatório",
                            })}
                            variant="outline"
                            borderRadius={"2px"}

                        />

                        <Input
                            id="password"
                            placeholder="Senha"
                            {...register("password", {
                                required: "Campo obrigatório",
                            })}
                            variant="outline"
                            type='password'
                            borderRadius={"2px"}
                        />

                        <Button
                            mt={4} colorScheme={colors.secondary} isLoading={isSubmitting} type="submit"
                        >
                            {loading ?
                                <CircularProgress isIndeterminate color={colors.lightNeutral} size="40px" />
                                : <Text>Login</Text>}
                        </Button>
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

