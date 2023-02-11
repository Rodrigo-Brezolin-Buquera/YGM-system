import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text,
    Modal, ModalBody, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createClasses } from "../../api/calendar";
import { DayOptions, StyleOptions, TeacherOptions } from "../../components/selectOptions";
import { FormButton } from "../../theme/FormButton";
import { colors } from "../../theme/colors";

export const CreateClassModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = (values) => {
        setLoading(true);
        createClasses(values)
            .then(reset())
            .catch(err => console.log(err.message))
            .finally(setLoading(false));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={"center"}>Adicionar aula</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            isInvalid={errors.name || errors.day || errors.teacher || errors.time || errors.date}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={"1em"}
                            minW={"300px"}
                        >

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
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                                <br />
                                {errors.day && errors.day.message}
                                <br />
                                {errors.teacher && errors.teacher.message}
                                <br />
                                {errors.time && errors.time.message}
                                <br />
                                {errors.date && errors.date.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormButton isSubmitting={isSubmitting} color={colors.secondary} loading={loading}>
                            <Text>Criar aula</Text>
                        </FormButton>

                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

