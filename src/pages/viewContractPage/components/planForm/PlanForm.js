import React from 'react'
import { Form } from './styled'
import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormControl,
    Input,
    Button, Select, Text
} from "@chakra-ui/react";
import { TypeOptions } from '../../../../constants/selectOptions'
import { addNewContract } from '../../../../services/requests/contractRequests'

const PlanForm = ({ setAddPlan, id, setLoading, loading }) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();


    const onSubmit = (values) => {
        setLoading(true)
        addNewContract(values, id, setLoading, setAddPlan)
        reset()
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
            <FormControl isInvalid={errors.plan || errors.date}>
                <Select
                    id="plan"
                    variant={"outline"}
                    placeholder="Plano"
                    {...register("plan", {
                        required: "Campo Obrigatório"
                    })}
                >
                    <TypeOptions />
                </Select>

                <Input
                 variant={"outline"}
                    id="date"
                    placeholder="Escolha um plano"
                    type="date"
                    {...register("date", {
                        required: "Campo Obrigatório"
                    })}
                />
                <FormErrorMessage>
                    {errors.plan && errors.plan.message}
                    {errors.date && errors.date.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme="yellow" isLoading={isSubmitting} type="submit">
                Adcionar plano
            </Button>

        </Form>
    )
}

export default PlanForm
