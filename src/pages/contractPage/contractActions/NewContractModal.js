import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text
} from "@chakra-ui/react";
import {planOptions} from "../../../components/planOptions"
import { FormButton, ModalComponent } from "../../../theme";
import { useNewContractLogic } from "./useNewContractLogic";

export const NewContractModal = ({ id, name, isOpen, onClose, setReload  }) => {
    const { loading, formControls } = useNewContractLogic(id, name, onClose, setReload)
    const { register, onSubmit, errors, isSubmitting } = formControls
    
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Novo contrato"}>

            <form onSubmit={onSubmit} >
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
                        {planOptions()}
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

