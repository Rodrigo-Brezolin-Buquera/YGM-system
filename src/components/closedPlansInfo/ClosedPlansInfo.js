import React from 'react'
import { ClosedPlansContainer, PlanCard } from './styled'
import Typography from '@material-ui/core/Typography';



const ClosedPlansInfo = ({closedContracts}) => {
    
   
    const closedContractsList = closedContracts && closedContracts.length && closedContracts.map((contract) => {
        return (
            <PlanCard key={contract.id}>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}> Plano: {contract.plan}</Typography>
                <Typography> Terminou em: {contract.ended}</Typography>
            </PlanCard>
        )
    })
    return (
        <ClosedPlansContainer>
            <Typography variant="h6" > Planos encerrados: </Typography>
            {closedContracts?.length ? closedContractsList : <p> Não há planos encerrados </p>}

        </ClosedPlansContainer>
    )
}

export default ClosedPlansInfo
