import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { singUp, genPassword } from "../../api/auth";
import { createContract } from "../../api/contracts";
import { emailPattern, stringPattern } from "../../api/patterns";
import { TypeOptions } from "../../components/selectOptions";
import { ModalComponent, FormButton } from "../../theme";

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
        singUp({ email: values.email, password: genPassword() })
            .then(id => createContract( values, id))
            .catch((err) => console.log(err.message))
            .finally(() => {
                setLoading(false)
                reset()
                onClose() 
            })

    };

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Adicionar usuário"} >   
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
                            pattern: stringPattern
                        })}
                    />

                    <Input
                        variant={"outline"}
                        id="email"
                        placeholder="email"
                        {...register("email", {
                            required: "Campo Obrigátorio",
                            pattern: emailPattern
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

                <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading}>
                    <Text>Criar</Text>
                </FormButton>
            </form>
             
        </ModalComponent>


    );
};

