import { Button, CircularProgress, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { changePassword } from '../../../../services/requests/authRequests';

export const ChangePasswordButton = ({ id }) => {
    const [loading, setLoading] = useState(false)

    const sendPasswordLink = async () => {
        if(window.confirm("Enviar email com link para gerar nova senha?")) {
            setLoading(true)
            await changePassword(id)
            setLoading(false)
        }
       
    }

    return (
        <Button
            variant={"contained"}
            color={"secondary"}
            onClick={() => sendPasswordLink()}
        >
            {loading ?
                <CircularProgress color={"inherit"} size={24} />
                :
                <Text>Nova senha</Text>
            }
        </Button>
    )
}