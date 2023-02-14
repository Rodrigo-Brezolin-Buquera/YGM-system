import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { numberPattern } from "../../api/patterns";
import { DurationOptions, FrequencyOptions } from "../../components/selectOptions";
import { FormButton } from "../../theme"

export const PlanForm = ({ loading, setLoading }) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = (values) => {
        setLoading(true);
        // singUp({ email: values.email, password: genPassword() })
        //     .then(id => createContract( values, id))
        //     .catch((err) => console.log(err.message))
        //     .finally(() => {
        //         setLoading(false)
        //         reset()
        //         onClose() 
        //     })

    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
                isInvalid={errors.value || errors.frequency || errors.duration}
                display={"flex"}
                flexDirection={"row"}
                flexWrap={["wrap", "wrap", "nowrap"]}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"1em"}
                overflow={"auto"}
                minW={"300px"}
            >
                <Input
                    w={"100px"}
                    variant={"outline"}
                    id="value"
                    placeholder="Valor "
                    {...register("value", {
                        required: "Campo Obrigátorio",
                        pattern: numberPattern
                    })}
                />

                <Select
                    w={"150px"}
                    variant={"outline"}
                    id="frequency"
                    placeholder="Frequência"
                    {...register("frequency", {
                        required: "Campo Obrigátorio"
                    })}
                >
                    <FrequencyOptions />
                </Select>

                <Select
                    w={"130px"}
                    variant={"outline"}
                    id="duration"
                    placeholder="Duração"
                    {...register("duration", {
                        required: "Campo Obrigátorio"
                    })}
                >
                    <DurationOptions />
                </Select>


                <FormErrorMessage>
                    {errors.value && errors.value.message}
                    <br />
                    {errors.frequency && errors.frequency.message}
                    <br />
                    {errors.duration && errors.duration.message}
                </FormErrorMessage>
            </FormControl>

            <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading}>
                <Text>Adicionar plano</Text>
            </FormButton>
        </form>
    )
}
