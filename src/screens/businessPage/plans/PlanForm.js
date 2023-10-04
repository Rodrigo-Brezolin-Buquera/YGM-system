import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text, Button
} from "@chakra-ui/react";
import { pricePattern } from "../../../api/patterns";
import { DurationOptions, FrequencyOptions } from "./selectOptions";

export const PlanForm = ({ loading, formControls }) => {
    const { register, onSubmit, errors, isSubmitting } = formControls

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

                <Button
                    isSubmitting={isSubmitting}
                    bg={"brand.200"}
                    type="submit"
                    loading={loading}
                    borderRadius={"10px"}
                    width={"136px"}
                >
                    <Text>Adicionar</Text>
                </Button>
            </FormControl>
        </form>
    )
}
