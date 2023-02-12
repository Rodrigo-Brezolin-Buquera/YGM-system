import { Button, CircularProgress } from "@chakra-ui/react";
import React, { useState } from "react";
import { goBack } from "../../../../routes/coordinator";
import { deleteClassByGroupId, deleteClassById } from "../../../../services/requests/calendarRequests";
import { ButtonContainer } from "./styled";

const DeleteClassButtons = ({ id, groupId, history }) => {
    const [loading, setLoading] = useState(false);

    const deleteClass = () => {
        if (window.confirm("Deletar aula?")) {
            setLoading(true);
            deleteClassById(id, setLoading, goBack, history);
        }
    };

    const deleteClasses = () => {
        if (window.confirm("Deletar todas as aulas nesse horário?")) {
            setLoading(true);
            deleteClassByGroupId(groupId, setLoading, goBack, history);
        }
    };

    return <ButtonContainer>
        <Button
            colorScheme='yellow'
            onClick={deleteClass}
        >
            {loading ? <CircularProgress isIndeterminate color="yellow.400" size="75px"  /> :  "Excluir aula"}

        </Button>

        <Button
            colorScheme='yellow'
            onClick={deleteClasses}
        >
            {loading ? <CircularProgress isIndeterminate color="yellow.400" size="75px"  /> :  "Excluir horário"}
        </Button>
    </ButtonContainer>;
};

export default DeleteClassButtons;