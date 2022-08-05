import React, { useState } from 'react'
import { ButtonContainer } from './styled'
import { Button, Typography, CircularProgress } from '@material-ui/core'
import { deleteClassByGroupId, deleteClassById } from '../../../../services/requests/calendarRequests'
import { goBack } from '../../../../routes/coordinator'

const DeleteClassButtons = ({ id, groupId, history }) => {
    const [loading, setLoading] = useState(false)

    const deleteClass = async () => {
        if (window.confirm("Deletar aula?")) {
            setLoading(true)
            await deleteClassById(id)
            setLoading(false)
            goBack(history)
        }

    }

    const deleteClasses = async () => {
        if (window.confirm("Deletar todas as aulas nesse horário?")) {
            setLoading(true)
            await deleteClassByGroupId(groupId)
            setLoading(false)
            goBack(history)
        }
    }

    return <ButtonContainer>
        <Button
            variant={"contained"}
            color={"secondary"}
            onClick={deleteClass}
        >
            {loading ? <CircularProgress color={"inherit"} size={24} /> :   <Typography> Excluir aula</Typography>}
          
        </Button>

        <Button
            variant={"contained"}
            color={"secondary"}
            onClick={deleteClasses}
        >
             {loading ? <CircularProgress color={"inherit"} size={24} /> :   <Typography> Excluir horário</Typography>}
        </Button>
    </ButtonContainer>
}

export default DeleteClassButtons