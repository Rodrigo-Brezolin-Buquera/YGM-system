import React from 'react'
import { FormLine, Form } from './styled'
import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
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
                        variant="outline"
                        id="name"
                        placeholder="Estilo"
                        {...register("name", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <StyleOptions />
                    </Select>
                    <Select
                        variant="outline"
                        id="day"
                        placeholder="Dia "
                        {...register("day", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <DayOptions />
                    </Select>
                    <Select
                        variant="outline"
                        id="teacher"
                        placeholder="Professor"
                        {...register("teacher", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <TeacherOptions />
                    </Select>
                </FormLine>
                <FormLine>
                    <Input
                        variant="outline"
                        id="time"
                        type="time"
                        {...register("time", {
                            required: "Campo Obrigatório",
                        })}
                    />
                    <Input
                        variant="outline"
                        id="date"
                        placeholder="Data de início"
                        type="date"
                        {...register("date", {
                            required: "Campo Obrigatório",
                        })}
                    />
                </FormLine>

                <FormErrorMessage>
                    {errors.name && errors.name.message}
                    {errors.day && errors.day.message}
                    {errors.teacher && errors.teacher.message}
                    {errors.time && errors.time.message}
                    {errors.date && errors.date.message}
                </FormErrorMessage>

            </FormControl>
            <Button mt={4} colorScheme="yellow" isLoading={isSubmitting} type="submit">
                Criar aula
            </Button>
        </Form>
    )
}

export default CreateClassForm