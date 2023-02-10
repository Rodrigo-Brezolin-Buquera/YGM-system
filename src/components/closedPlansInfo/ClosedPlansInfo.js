import {Text} from "@chakra-ui/react";
import React from "react";
import { ClosedPlansContainer, PlanCard } from "./styled";

const ClosedPlansInfo = ({closedContracts}) => {
    
   
    const closedContractsList = closedContracts && closedContracts.length && closedContracts.map((contract) => {
        return (
            <PlanCard key={contract.id}>
                <Text fontSize="xl"  > Plano: {contract.plan}</Text>
                <Text fontSize="xl" > Terminou em: {contract.ended}</Text>
            </PlanCard>
        );
    });
    return (
        <ClosedPlansContainer>
            <Text as="b" fontSize="xl" > Contratos encerrados: </Text>
            {closedContracts?.length ? closedContractsList : <p> Não há contratos encerrados </p>}

        </ClosedPlansContainer>
    );
};

export default ClosedPlansInfo;
