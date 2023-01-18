import { Button, CircularProgress, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { changePassword } from '../../../../services/requests/authRequests';

export const ChangePasswordButton = ({ id }) => {
    const [loading, setLoading] = useState(false)

    const sendPasswordLink = async () => {
        if (window.confirm("Enviar email com link para gerar nova senha?")) {
            setLoading(true)
            await changePassword(id)
            setLoading(false)
        }
    }

    return (
        <Button
            colorScheme='yellow'
            onClick={() => sendPasswordLink()}
        >
            {loading ?
                <CircularProgress isIndeterminate color="yellow.400" size="40px" />
                :
                <Text>Nova senha</Text>
            }
        </Button>
    )
}