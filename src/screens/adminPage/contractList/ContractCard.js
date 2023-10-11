import { Text,  Card } from "@chakra-ui/react";
import { memo } from "react";
import { Line } from "../../../theme";
import { goToContract } from "../../../utils/coordinator";

const ContractCard = ({contract, router}) => {

    return (
        <Card
            display={"flex"}
            flexDirection={["column", "column", "column", "row"]}
            padding={"0.5em"}
            borderRadius={"10px"}
            minW={"220px"}
            width={"100%"}
            backgroundColor={"brand.500"}
            _hover={{ cursor: "pointer" }}
            overflow={"auto"}
            gap={["0.1em","0.5em"]}
            onClick={() => goToContract( router, contract.id)}
        >
                <Line  justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b">Nome:</Text>
                    <Text >{contract.name}</Text>
                </Line>

                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Plano: </Text>
                    <Text >{contract.plan}</Text>
                </Line>

                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Início: </Text>
                    <Text >{contract.started}</Text>
                </Line>
        </Card>
    );
};

export default memo(ContractCard);
