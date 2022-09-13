import React from 'react'
import { FormLine, PlanForm } from './styled'
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

const EditPlanForm = ({ contract, setPlan, name, setLoading, loading }) => {
    const { userId } = useParams();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = (values) => {
        if (window.confirm("Você deseja alterar este plano?")) {
            setLoading(true)
            editContract(values, userId, setLoading, setPlan)
            reset()
        }

    }
    // como fazer ele ter valores iniciais!!!!
    return (
        <PlanForm onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name || errors.plan || errors.active ||
                errors.started || errors.ends || errors.availableClasses}>
                <Input
                    id="name"
                    placeholder="name"
                    {...register("name", {
                        required: "Campo Obrigatório",
                        minLength: { value: 3, message: "O nome precisa de no mínimo 3 caracteres" }
                    })}
                />

                <FormLine>
                    <Text> Plano: </Text>
                    <Select
                        id="plan"
                        placeholder="Escolha um plano"
                        {...register("plan", {
                            required: "Campo Obrigatório"
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
                            required: "Campo Obrigatório"
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
                            required: "Campo Obrigatório"
                        })}
                    />
                </FormLine>
                <FormLine>
                    <Text> Fim: </Text>
                    <Input
                        id="ends"
                        type="date"
                        {...register("ends", {
                            required: "Campo Obrigatório"
                        })}
                    />
                </FormLine>

                <Input
                    name="availableClasses"
                    type="number"
                    {...register("availableClasses", {
                        required: "Campo Obrigatório"
                    })}
                />

                <FormErrorMessage>
                    {errors.name && errors.name.message}
                    {errors.plan && errors.plan.message}
                    {errors.active && errors.active.message}
                    {errors.started && errors.started.message}
                    {errors.ends && errors.ends.message}
                    {errors.availableClasses && errors.availableClasses.message}
                </FormErrorMessage>
            </FormControl>

            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
            >
                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                    Alterar
                </Button>
            </Button>
        </PlanForm>
    )
}

export default EditPlanForm
