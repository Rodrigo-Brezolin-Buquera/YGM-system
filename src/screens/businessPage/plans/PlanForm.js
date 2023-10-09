import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text, Button
} from "@chakra-ui/react";
import FormButton from "../../../theme/components/FormButton";
import { pricePattern } from "../../../utils/patterns";
import { DurationOptions, FrequencyOptions } from "./selectOptions";

export const PlanForm = ({ loading, formControls }) => {
    const { register, onSubmit, errors, isSubmitting } = formControls
    console.log(loading)
    return (
        <form onSubmit={onSubmit}>
            <FormControl
                isInvalid={errors.price || errors.frequency || errors.type}
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
                    id="type"
                    placeholder="Duração"
                    {...register("type", {
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
                    {errors.type && errors.type.message}
                </FormErrorMessage>

                <FormButton
                    isSubmitting={isSubmitting}
                    color={"brand.200"}
                    loading={loading}
                    width={"136px"}
                >
                    <Text>Adicionar</Text>
                </FormButton>
            </FormControl>
        </form>
    )
}
