import { Button, Typography, CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import { goToAdmin } from '../../../../routes/coordinator';
import { deleteContract } from '../../../../services/requests/authRequests';

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
            variant={"contained"}
            color={"secondary"}
            onClick={() => excludeContract()}
        >
            {loading ?
                <CircularProgress color={"inherit"} size={24} />
                : <Typography>Excluir contrato </Typography>
            }
        </Button>
    )
}