import {
    FormErrorMessage,
    FormControl,
    Input,
    Select,
    Text,
    FormLabel,
    useToast
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateContract } from "../../api/contracts";
import { numberPattern, stringPattern } from "../../api/patterns";
import { FormButton, ModalComponent, toastAlert } from "../../theme";
import { formatToCalendar } from "../../utils/dates"

export const EditContractModal = ({ contract, name, id, isOpen, onClose, plansOptions }) => {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        shouldUnregister: true
    });
    const toast = useToast()

    useEffect(() => {
        setValue("name", name);
        setValue("plan", contract?.plan);
        setValue("started", contract?.started && formatToCalendar(contract?.started));
        setValue("ends", contract?.ends && formatToCalendar(contract?.ends));
        setValue("availableClasses", contract?.availableClasses);
    }, [name, contract, setValue])


    const onSubmit = (values) => {
        setLoading(true);
        updateContract(values, id)
            .then(() => {
                toastAlert(toast, "Contrato alterado", "success")
                reset()
                onClose()
            })
            .catch(err => toastAlert(toast, err.message, "error"))
            .finally(() => setLoading(false));
    };


    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Editar contrato"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"1em"}
                    minW={"300px"}
                    isInvalid={errors.name || errors.plan ||
                        errors.started || errors.ends || errors.availableClasses}
                >

                    <FormLabel

                        display={"flex"}
                        alignItems={"center"}
                        gap={"1em"}
                    > Nome:
                        <Input
                            w="250px"
                            id="name"
                            placeholder="name"
                            {...register("name", {
                                required: "Campo Obrigátorio",
                                pattern: stringPattern
                            })}
                        />
                    </FormLabel>

                    <FormLabel

                        display={"flex"}
                        alignItems={"center"}
                        gap={"1em"}
                    > Plano:
                        <Select
                            w={"250px"}
                            id="plan"
                            placeholder="Escolha um plano"
                            {...register("plan", {
                                required: "Campo Obrigátorio",
                            })}
                        >
                            {plansOptions}
                        </Select>

                    </FormLabel>


                    <FormLabel

                        display={"flex"}
                        alignItems={"center"}
                        gap={"1em"}
                    > Início:
                        <Input
                            w="250px"
                            id="started"
                            type="date"
                            {...register("started", {
                                required: "Campo Obrigátorio",
                            })}
                        />
                    </FormLabel>

                    <FormLabel

                        display={"flex"}
                        alignItems={"center"}
                        gap={"1em"}
                    > Fim:
                        <Input
                            w="250px"
                            id="ends"
                            type="date"
                            {...register("ends", {
                                // required: "Campo Obrigátorio",

                            })}
                        />
                    </FormLabel>

                    <FormLabel

                        display={"flex"}
                        alignItems={"center"}
                        gap={"1em"}
                    > Aulas:
                        <Input
                            w="250px"
                            name="availableClasses"
                            type="number"
                            {...register("availableClasses", {
                                // required: "Campo Obrigátorio",
                                pattern: numberPattern
                            })}
                        />
                    </FormLabel>
                    <FormErrorMessage>
                        {errors.plan && errors.plan.message}
                        <br />
                        {errors.name && errors.name.message}
                        <br />
                        {errors.started && errors.started.message}
                        <br />
                        {errors.ends && errors.ends.message}
                        <br />
                        {errors.availableClasses && errors.availableClasses.message}
                    </FormErrorMessage>
                    <FormButton
                        isSubmitting={isSubmitting}
                        oading={loading}
                        color={"brand.200"}
                        width={"124px"}
                    >
                        <Text>Salvar</Text>
                    </FormButton>
                </FormControl>
            </form>
        </ModalComponent>
    );
};
;

