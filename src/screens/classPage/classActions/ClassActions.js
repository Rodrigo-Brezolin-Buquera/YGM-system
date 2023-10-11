import {  Text} from "@chakra-ui/react";
import {useDeleteItem} from "../../../hooks/useDeleteItem"
import {  WrapContainer, LoadingButton,  } from "../../../theme";

export const ClassActions = ({id, groupId}) => {
    const {onDelete:deleteClass } = useDeleteItem(`/calendar/${id}`,"Deletar aula?")
    const {onDelete:deleteClasses } = useDeleteItem(`/calendar/${groupId}?allClasses=true`,"Deletar todas as aulas nesse horário?")

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

