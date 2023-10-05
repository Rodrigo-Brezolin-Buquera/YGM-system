import {  Text, useToast} from "@chakra-ui/react";
import { deleteItemById, deleteItemWhere } from "../../../api";
import { calendarCol } from "../../../api/config";
import { goToAdmin } from "../../../routes/coordinator";
import {  WrapContainer, LoadingButton,  } from "../../../theme";
import toastAlert from "../../../components/toastAlert";
import confirmDialog from "../../../components/confirmDialog";



export const ClassActions = () => {
    const toast = useToast()

    const deleteClass = () => {
        confirmDialog("Deletar aula?", () => {
            deleteItemById(calendarCol, id)
                .then(setTimeout(() => { goToAdmin(router) }, 500))
                .catch(err => toastAlert(toast, err.message, "error"))
        })
    }

    const deleteClasses = () => {
        confirmDialog("Deletar todas as aulas nesse horário?", () => {
            deleteItemWhere(calendarCol, "groupId", yogaClass.groupId)
                .then(setTimeout(() => { goToAdmin(router) }, 500))
                .catch(err => toastAlert(toast, err.message, "error"))
        })
    }

    return (
        <WrapContainer>
            <LoadingButton
                color={"brand.200"}
                handler={deleteClass}
            >
                <Text> Excluir aula</Text>
            </LoadingButton>

            <LoadingButton
                color={"brand.200"}
                handler={deleteClasses}
            >
                <Text> Excluir horário</Text>
            </LoadingButton>

        </WrapContainer>
    )
}

