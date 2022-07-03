import React, { useState } from 'react'
import { ButtonContainer } from './styled'
import { Button} from '@material-ui/core'
import { deleteClassByDate, deleteClassById } from '../../../../services/requests/calendarRequests'

const DeleteClassButtons = ({ groupId, date }) => {
    const [loading, setLoading] = useState(false)

    const deleteClass = () => {
        setLoading(true)
        deleteClassById(groupId)
        setLoading(false)
    }

    const deleteClasses = () => {
        setLoading(true)
        deleteClassByDate(groupId, date)
        setLoading(false)
    }

    return <ButtonContainer>
        <Button
            variant={"contained"}
            color={"secondary"}
            onClick={deleteClass}
        >
            Excluir aula
        </Button>

        <Button
            variant={"contained"}
            color={"secondary"}
            onClick={deleteClasses}
        >
            Excluir horário de aula
        </Button>
    </ButtonContainer>
}

export default DeleteClassButtons