import React, { useState } from 'react'
import { ButtonContainer } from './styled'
import { Button} from '@material-ui/core'
import { deleteClassByGroupId, deleteClassById } from '../../../../services/requests/calendarRequests'
import { goBack } from '../../../../routes/coordinator'

const DeleteClassButtons = ({id, groupId, history }) => {
    const [loading, setLoading] = useState(false)

    const deleteClass = () => {
        setLoading(true)
        deleteClassById(id)
        setLoading(false)
        goBack(history)
    }

    const deleteClasses = () => {
        setLoading(true)
        deleteClassByGroupId(groupId)
        setLoading(false)
        goBack(history)
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