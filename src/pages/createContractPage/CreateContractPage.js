import React, { useState } from 'react'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { MainContainer, LoginForm, BoxContainer } from "./styled"
import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormControl,
    Input,
    Button,
    Select, Text, CircularProgress
} from "@chakra-ui/react";
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { TypeOptions } from '../../constants/selectOptions';
import { createContract } from '../../services/requests/contractRequests';
import { goToAdmin } from '../../routes/coordinator';

const CreateContractPage = () => {
    useProtectedPageAdmin()
    const [loading, setLoading] = useState(false)
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();
    const history = useHistory()

    const onSubmit = (values) => {
        setLoading(true)
        createContract(values, goToAdmin, history,setLoading)
    }

    return (
        <>
            <Header history={history} />
            <MainContainer>
                <BoxContainer>
                    <LoginForm onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.name || errors.email || errors.plan || errors.date}>
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
                                {errors.email && errors.email.message}
                                {errors.plan && errors.plan.message}
                                {errors.date && errors.date.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Button mt={4} colorScheme="yellow" isLoading={isSubmitting} type="submit">
                            {loading ?
                                <CircularProgress isIndeterminate color="gray.400" size="40px" />
                                : <Text>Criar</Text>}
                        </Button>

                    </LoginForm>
                </BoxContainer>
            </MainContainer>
        </>
    )
}

export default CreateContractPage
