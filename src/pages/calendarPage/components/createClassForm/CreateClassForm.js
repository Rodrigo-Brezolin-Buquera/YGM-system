import React from 'react'
import { FormLine, Form } from './styled'
import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Select
} from "@chakra-ui/react";
import { DayOptions, StyleOptions, TeacherOptions } from '../../../../constants/selectOptions'
import { createClass } from '../../../../services/requests/calendarRequests'

const CreateClassForm = ({ loading, setLoading }) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = (values) => {
        setLoading(true)
        createClass(values, setLoading)
        reset()
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name || errors.day || errors.teacher || errors.time || errors.date}>
                <FormLine>
                    <Select
                        id="name"
                        placeholder="Escolha um estilo"
                        {...register("name", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <StyleOptions />
                    </Select>
                    <Select
                        id="day"
                        placeholder="Escolha um dia de aula"
                        {...register("day", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <DayOptions />
                    </Select>
                    <Select
                        id="teacher"
                        placeholder="Escolha um professor"
                        {...register("teacher", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <TeacherOptions />
                    </Select>
                </FormLine>
                <Input
                    id="time"
                    type="time"
                    {...register("time", {
                        required: "Campo Obrigatório",
                    })}
                />
                <Input
                    id="date"
                    placeholder="Data de início"
                    type="date"
                    {...register("date", {
                        required: "Campo Obrigatório",
                    })}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                    {errors.day && errors.day.message}
                    {errors.teacher && errors.teacher.message}
                    {errors.time && errors.time.message}
                    {errors.date && errors.date.message}
                </FormErrorMessage>

            </FormControl>
            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                Criar aula
            </Button>
        </Form>
    )
}

export default CreateClassForm