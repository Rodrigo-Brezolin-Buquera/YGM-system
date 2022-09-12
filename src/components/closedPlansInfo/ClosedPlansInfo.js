import React from 'react'
import { ClosedPlansContainer, PlanCard } from './styled'
import {Text} from '@chakra-ui/react';

const ClosedPlansInfo = ({closedContracts}) => {
    
   
    const closedContractsList = closedContracts && closedContracts.length && closedContracts.map((contract) => {
        return (
            <PlanCard key={contract.id}>
                <Text > Plano: {contract.plan}</Text>
                <Text> Terminou em: {contract.ended}</Text>
            </PlanCard>
        )
    })
    return (
        <ClosedPlansContainer>
            <Text as="b" > Contratos encerrados: </Text>
            {closedContracts?.length ? closedContractsList : <p> Não há contratos encerrados </p>}

        </ClosedPlansContainer>
    )
}

export default ClosedPlansInfo
