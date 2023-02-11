import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text, Modal, ModalBody, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TypeOptions } from "./selectOptions";
import { FormButton } from "../theme/FormButton";
import { colors } from "../theme/colors";
import { formatDate } from "../services/moment";
import { singUp } from "../api/auth";
import { createItem } from "../api";
import { contractsCol } from "../api/config";
import { genPassword } from "../services/generatePassword"

export const CreateContractModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = (values) => {
        setLoading(true);
        const newValues = {
            ...values,
            date: formatDate(values.date, "DD/MM/YYYY")
        }

        singUp({ email: newValues.email, password: genPassword() })
            .then(id => createItem(contractsCol, values, id))
            .catch((err) => console.log(err.message))
            .finally(() => {
                setLoading(false)
                reset()
                onClose() 
            })

    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={"center"}>Adicionar usuário</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            isInvalid={errors.name || errors.email || errors.plan || errors.date}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={"1em"}
                            minW={"300px"}
                        >
                            <Input
                                variant={"outline"}
                                id="name"
                                placeholder="Nome completo"
                                {...register("name", {
                                    required: "Campo Obrigátorio",
                                    minLength: { value: 3, message: "O nome precisa ter no mínimo 3 carateres" }
                                })}
                            />

                            <Input
                                variant={"outline"}
                                id="email"
                                placeholder="email"
                                {...register("email", {
                                    required: "Campo Obrigátorio"
                                })}
                            />
                            <Select
                                variant={"outline"}
                                id="plan"
                                placeholder="Escolha um plano"
                                {...register("plan", {
                                    required: "Campo Obrigátorio"
                                })}
                            >
                                <TypeOptions />

                            </Select>
                            <Input
                                variant={"outline"}
                                id="date"
                                type="date"
                                placeholder="Data"
                                {...register("date", {
                                    required: "This is required"
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                                <br />
                                {errors.email && errors.email.message}
                                <br />
                                {errors.plan && errors.plan.message}
                                <br />
                                {errors.date && errors.date.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormButton isSubmitting={isSubmitting} color={colors.secondary} loading={loading}>
                            <Text>Criar</Text>
                        </FormButton>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>


    );
};

