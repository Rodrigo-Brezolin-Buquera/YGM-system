import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text, Box
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../api";
import { contractsCol } from "../../api/config";
import HeaderAdmin from "../../components/HeaderAdmin";
import { TypeOptions } from "../../components/selectOptions";
// import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { goToAdmin } from "../../routes/coordinator";
import { FormButton } from "../../theme/FormButton";
import { colors } from "../../theme/colors";

const CreateContractPage = () => {
    // useProtectedPageAdmin();
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }

    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        setLoading(true);
        createItem(contractsCol, values, "ID")
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message))
            .finally(() => {
                setLoading(false)
                goToAdmin(navigate)
            })
        // createContract(values, goToAdmin, navigate, setLoading);
    };

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                backgroundColor={colors.lightNeutral}
                minH={"100vh"}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    marginTop={"1em"}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            isInvalid={errors.name || errors.email || errors.plan || errors.date}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"0.1em"}
                            minW={"300px"}
                        >
                            <Input
                                variant={"outline"}
                                id="name"
                                placeholder="Nome completo"
                                {...register("name", {
                                    required: "Campo Obrigátorio",
                                    minLength: { value: 3, message: "O nome precisa ter no mínimo 3 carateres" }
                                })}
                            />

                            <Input
                                variant={"outline"}
                                id="email"
                                placeholder="email"
                                {...register("email", {
                                    required: "Campo Obrigátorio"
                                })}
                            />
                            <Select
                                variant={"outline"}
                                id="plan"
                                placeholder="Escolha um plano"
                                {...register("plan", {
                                    required: "Campo Obrigátorio"
                                })}
                            >
                                <TypeOptions />

                            </Select>
                            <Input
                                variant={"outline"}
                                id="date"
                                type="date"
                                placeholder="Data"
                                {...register("date", {
                                    required: "This is required"
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                                <br />
                                {errors.email && errors.email.message}
                                <br />
                                {errors.plan && errors.plan.message}
                                <br />
                                {errors.date && errors.date.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormButton isSubmitting={isSubmitting} color={colors.secondary} loading={loading}>
                            <Text>Criar</Text>
                        </FormButton>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default CreateContractPage;
