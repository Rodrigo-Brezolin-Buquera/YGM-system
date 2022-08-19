import React, { useState } from 'react'
import { ButtonContainer } from './styled'
import { Button, Typography, CircularProgress } from '@material-ui/core'
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
            variant={"contained"}
            color={"secondary"}
            onClick={deleteClass}
        >
            {loading ? <CircularProgress color={"inherit"} size={24} /> : <Typography> Excluir aula</Typography>}

        </Button>

        <Button
            variant={"contained"}
            color={"secondary"}
            onClick={deleteClasses}
        >
            {loading ? <CircularProgress color={"inherit"} size={24} /> : <Typography> Excluir horário</Typography>}
        </Button>
    </ButtonContainer>
}

export default DeleteClassButtons