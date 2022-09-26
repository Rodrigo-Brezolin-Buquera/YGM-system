import { Button, CircularProgress, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { goToAdmin } from '../../../../routes/coordinator';
import { deleteContract } from '../../../../services/requests/contractRequests';

export const DeleteContractButton = ({ id, history }) => {
    const [loading, setLoading] = useState(false)

    const excludeContract = async () => {

        if(window.confirm("Excluir este contrato?")) {
            setLoading(true)
            await deleteContract(id)
            setLoading(false)
            goToAdmin(history)
        }    
    }
    
    return (
        <Button
        colorScheme='teal'
            onClick={() => excludeContract()}
        >
            {loading ?
                <CircularProgress isIndeterminate color="grey.400" size="40px"  />
                : <Text>Excluir contrato </Text>
            }
        </Button>
    )
}