import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text, useToast
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { pricePattern } from "../../api/patterns";
import { createPlan } from "../../api/plans";
import { DurationOptions, FrequencyOptions } from "./selectOptions";
import { FormButton } from "../../theme"
import toastAlert from "../../components/toastAlert";

export const PlanForm = ({ loading, setLoading }) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();
    const toast = useToast()

    const onSubmit = (values) => {
        setLoading(true);
        createPlan(values)
            .then(reset())
            .catch((err) => toastAlert(toast, err.message, "error"))
            .finally(() => setLoading(false))
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
                isInvalid={errors.price || errors.frequency || errors.duration}
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"1em"}
                overflow={"auto"}
                minW={"250px"}
            >
                <Input

                    w={"100px"}
                    variant={"outline"}
                    id="price"
                    placeholder="Valor "
                    {...register("price", {
                        required: "Campo Obrigátorio",
                        pattern: pricePattern
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

                <FormErrorMessage alignItems={"center"} w={"100%"} display={"flex"} justifyContent={"center"}   >
                    {errors.price && errors.price.message}
                    <br />
                    {errors.frequency && errors.frequency.message}
                    <br />
                    {errors.duration && errors.duration.message}
                </FormErrorMessage>

                <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading} width={"136px"}>
                    <Text>Adicionar</Text>
                </FormButton>
            </FormControl>
        </form>
    )
}
