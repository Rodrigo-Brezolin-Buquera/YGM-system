import {
    FormErrorMessage,
    FormControl,
    Input,
    
    Select,
    Text,
    FormLabel
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { updateContract } from "../../api/contracts";
import { StatusOptions, TypeOptions } from "../../components/selectOptions";
import {formatToCalendar} from "../../services/moment"
import { FormButton } from "../../theme/FormButton";
import { ModalComponent } from "../../theme/ModalComponent";
import { colors } from "../../theme/colors";

export const EditContractModal = ({ contract,name, id, isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        shouldUnregister: true,
        defaultValues: {
            name: name,
            plan: contract?.plan,
            status: contract?.status,
            started:  formatToCalendar(contract?.started),
            ends: formatToCalendar(contract?.ends),
            availableClasses: contract?.availableClasses
        }
    });

    // eslint-disable-next-line no-empty-function
    useEffect(()=>{}, [contract, name])

    const onSubmit = (values) => {
     
        setLoading(true);
        updateContract( values, id)
            .then(()=> {
                reset()
                onClose()
            })
            .catch(err => console.log(err.message))
            .finally(()=> setLoading(false));    
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
                    isInvalid={errors.name || errors.plan || errors.active ||
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

                                minLength: { value: 3, message: "O nome precisa de no mínimo 3 caracteres" }
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
                            })}
                        >
                            <TypeOptions />
                        </Select>
                
                    </FormLabel>
                    <FormLabel
                        
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1em"}
                    > Status: 
                        <Select
                            w={"250px"}
                            id="active"
                            placeholder="Status do plano"
                            {...register("active", {
                            })}
                        >
                            <option value="" > Status </option>
                            <StatusOptions/>
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
                            })}
                        />
                    </FormLabel>
                    <FormErrorMessage>
                        {errors.plan && errors.plan.message}
                        <br/>
                        {errors.name && errors.name.message}
                        <br/>
                        {errors.active && errors.active.message}
                        <br/>
                        {errors.started && errors.started.message}
                        <br/>
                        {errors.ends && errors.ends.message}
                        <br/>
                    
                        {errors.availableClasses && errors.availableClasses.message}
                    </FormErrorMessage>
                </FormControl>

                <FormButton
                    isSubmitting={isSubmitting}
                    loading={loading}
                    color={colors.secondary}
                >
                    <Text>Salvar</Text>
                </FormButton>
            </form>
        </ModalComponent>
    );
};
;
