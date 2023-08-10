import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createContract, newContract } from "../../api/contracts";
import { FormButton, ModalComponent, toastAlert } from "../../theme";

export const AddContractModal = ({ id, name, userIsActive, isOpen, onClose, plansOptions }) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();
    const [loading, setLoading] = useState(false);
    const toast = useToast()

    const onSubmit = (values) => {
        setLoading(true);
        (
            userIsActive ?
                newContract(values, id)
                :
                createContract({
                    id,
                    name,
                    plan: values.plan,
                    date: values.date
                })
        )
            .then(() => {
                toastAlert(toast, "Contrato criado", "success")
                reset()
            })
            .catch(err => toastAlert(toast, err.message, "error"))
            .finally(() => {
                setLoading(false)
                onClose()
            });
    };

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Novo contrato"}>

            <form onSubmit={handleSubmit(onSubmit)} >
                <FormControl
                    isInvalid={errors.plan || errors.date}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"1em"}
                    minW={"300px"}

                >
                    <Select
                        id="plan"
                        variant={"outline"}
                        placeholder="Plano"
                        {...register("plan", {
                            required: "Campo Obrigatório"
                        })}
                    >
                        {plansOptions}
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
                        <br />
                        {errors.date && errors.date.message}
                    </FormErrorMessage>

                    <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading} width={"124px"} >
                        <Text>Adicionar </Text>
                    </FormButton>
                </FormControl>
            </form>
        </ModalComponent>

    );
};

