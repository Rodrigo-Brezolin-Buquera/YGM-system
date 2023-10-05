import {
    FormErrorMessage,
    FormControl,
    Input,
    Select, Text
} from "@chakra-ui/react";
import { ModalComponent, FormButton } from "../../../theme";
import { useCreateClassLogic } from "./useCreateClassLogic";

export const CreateClassModal = ({ isOpen, onClose }) => {
    const {loading, formControls } = useCreateClassLogic(onClose)
    const { register, onSubmit, errors, isSubmitting } = formControls
    
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} header={"Adicionar Aula"}>
            <form onSubmit={onSubmit}>
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
                        <option> Hatha Yoga </option>
                        <option> Vinyasa Flow </option>
                        <option> Yoga Restaurativo </option>
                    </Select>
                    <Select
                        variant="outline"
                        id="day"
                        placeholder="Dia "
                        {...register("day", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <option> Segunda </option>
                        <option> Terça </option>
                        <option> Quarta </option>
                        <option> Quinta </option>
                        <option> Sexta </option>
                        <option> Sábado </option>
                    </Select>
                    <Select
                        variant="outline"
                        id="teacher"
                        placeholder="Professor"
                        {...register("teacher", {
                            required: "Campo Obrigatório",
                        })}
                    >
                        <option> Rodrigo </option>
                        <option> Louize </option>
                    </Select>
                    <Input
                        variant="outline"
                        id="time"
                        type="time"
                        {...register("time", {
                            required: "Campo Obrigatório"
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

                    <FormButton isSubmitting={isSubmitting} color={"brand.200"} loading={loading} width={"124px"}>
                        <Text>Criar aula</Text>
                    </FormButton>

                </FormControl>
            </form>
        </ModalComponent>
    );
};

