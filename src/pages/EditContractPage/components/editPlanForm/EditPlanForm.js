import React from 'react'
import { FormLine, PlanForm, ButtonContainer } from './styled'
import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormControl,
    Input,
    Button,
    Select,
    Text
} from "@chakra-ui/react";
import { TypeOptions } from '../../../../constants/selectOptions'
import { editContract } from '../../../../services/requests/contractRequests'
import { useParams } from 'react-router-dom'
import moment from 'moment';

const EditPlanForm = ({ contract, setPlan, name, setLoading, loading }) => {
    const { userId } = useParams();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        shouldUnregister: true,
        defaultValues: {
            name,
            plan: contract.plan,
            status: contract.status,
            started: moment(contract.started, "DD/MM/YYYY").format("YYYY-MM-DD"),
            ends: moment(contract.ends, "DD/MM/YYYY").format("YYYY-MM-DD"),
            availableClasses: contract.availableClasses
        }
    });

    const onSubmit = (values) => {
     
        if (window.confirm("Você deseja alterar este plano?")) {
            setLoading(true)
            editContract(values, userId, setLoading, setPlan)
            reset()
        }
    }

    return (
        <PlanForm onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name || errors.plan || errors.active ||
                errors.started || errors.ends || errors.availableClasses}>
                <FormLine>
                    <Text> Nome: </Text>
                    <Input
                        id="name"
                        placeholder="name"
                        {...register("name", {

                            minLength: { value: 3, message: "O nome precisa de no mínimo 3 caracteres" }
                        })}
                    />
                </FormLine>
                <FormLine>
                    <Text> Plano: </Text>
                    <Select
                        id="plan"
                        placeholder="Escolha um plano"
                        {...register("plan", {
                        })}
                    >
                        <TypeOptions />
                    </Select>
                </FormLine>
                <FormLine>
                    <Text> Status: </Text>
                    <Select
                        id="active"
                        placeholder="Status do plano"
                        {...register("active", {
                        })}
                    >
                        <option value="" > Status </option>
                        <option value={true} > Ativo </option>
                        <option value={false} > Inativo </option>
                    </Select>
                </FormLine>
                <FormLine>
                    <Text> Início: </Text>
                    <Input
                        id="started"
                        type="date"
                        {...register("started", {
                        })}
                    />
                </FormLine>
                <FormLine>
                    <Text> Fim: </Text>
                    <Input
                        id="ends"
                        type="date"
                        {...register("ends", {
                        })}
                    />
                </FormLine>
                <FormLine>
                    <Text> Aulas:</Text>
                    <Input
                        name="availableClasses"
                        type="number"
                        {...register("availableClasses", {
                        })}
                    /></FormLine>

                <FormErrorMessage>
                    {errors.name && errors.name.message}
                    {errors.plan && errors.plan.message}
                    {errors.active && errors.active.message}
                    {errors.started && errors.started.message}
                    {errors.ends && errors.ends.message}
                    {errors.availableClasses && errors.availableClasses.message}
                </FormErrorMessage>
            </FormControl>

            <ButtonContainer>
                <Button mt={4} colorScheme="yellow" isLoading={isSubmitting} type="submit">
                    {loading ?
                        <CircularProgress isIndeterminate color="gray.400" size="40px" />
                        : <Text>Alterar</Text>}
                </Button>
            </ButtonContainer>
        </PlanForm>
    )
}

export default EditPlanForm
