import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text
} from "@chakra-ui/react";
import {useState} from "react";
import { useForm } from "react-hook-form";
import { TypeOptions } from "../../components/selectOptions";
import { FormButton } from "../../theme/FormButton";
import { ModalComponent } from "../../theme/ModalComponent";
import { colors } from "../../theme/colors";
import { updateContract } from "../../api/contracts";

const AddContractModal = ({ id,  isAddOpen, onAddClose   }) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();
    const [loading, setLoading] = useState(false);


    const onSubmit = (values) => {
        setLoading(true);
        updateContract(values, id)        
            .then(reset())
            .catch(err => console.log(err.message))
            .finally(setLoading(false));
    };

    return (
        <ModalComponent isOpen={isAddOpen} onClose={onAddClose} header={"Adicionar novo contrato"}>

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
                        <TypeOptions />
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
                        <br/>
                        {errors.date && errors.date.message}
                    </FormErrorMessage>
                </FormControl>
           
                <FormButton isSubmitting={isSubmitting} color={colors.secondary} loading={loading} >
                    <Text>Adicionar plano </Text>
                </FormButton>

            </form>
        </ModalComponent>

    );
};

export default AddContractModal;
