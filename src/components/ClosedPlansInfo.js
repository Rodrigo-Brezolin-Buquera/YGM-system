import { Text, Box } from "@chakra-ui/react";
import React from "react";

const ClosedPlansInfo = ({ closedContracts }) => {

    const closedContractsList = closedContracts && closedContracts.length && closedContracts.map((contract) => {
        return (
            <Box
                key={contract.id}
                display={"flex"}
                flex-direction={"column"}
                alignItems={"center"}
            >
                <Text fontSize="xl"  > Plano: {contract.plan}</Text>
                <Text fontSize="xl" > Terminou em: {contract.ended}</Text>
            </Box>
        );
    });
    return (
        <Box
            display={"flex"}
            flex-direction={"column"}
            alignItems={"center"}
            p={"1em"}
            gap={"0.5em"}
        >
            <Text as="b" fontSize="xl" > Contratos encerrados: </Text>
            {closedContracts?.length ? closedContractsList : <p> Não há contratos encerrados </p>}

        </Box>
    );
};

export default ClosedPlansInfo;
