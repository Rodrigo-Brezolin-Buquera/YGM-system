import React, { useState } from 'react'
import { ButtonContainer } from './styled'
import { Button, CircularProgress } from '@chakra-ui/react'
import { deleteClassByGroupId, deleteClassById } from '../../../../services/requests/calendarRequests'
import { goBack } from '../../../../routes/coordinator'

const DeleteClassButtons = ({ id, groupId, history }) => {
    const [loading, setLoading] = useState(false)

    const deleteClass = () => {
        if (window.confirm("Deletar aula?")) {
            setLoading(true)
            deleteClassById(id, setLoading, goBack, history)
        }
    }

    const deleteClasses = () => {
        if (window.confirm("Deletar todas as aulas nesse horário?")) {
            setLoading(true)
            deleteClassByGroupId(groupId, setLoading, goBack, history)
        }
    }

    return <ButtonContainer>
        <Button
            colorScheme='teal'
            onClick={deleteClass}
        >
            {loading ? <CircularProgress /> :  "Excluir aula"}

        </Button>

        <Button
            colorScheme='teal'
            onClick={deleteClasses}
        >
            {loading ? <CircularProgress /> :  "Excluir horário"}
        </Button>
    </ButtonContainer>
}

export default DeleteClassButtons