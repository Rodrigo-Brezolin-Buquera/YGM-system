import { Text,  Card, Box } from "@chakra-ui/react";
import { memo } from "react";
import { goToContract } from "../../../utils/coordinator";
import { Line } from "../../../theme";

const ContractCard = ({contract, router}) => {

    const Column = ({ children }) => {
        return (
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                minW={["100px", "150px", "250px"]}
            >
                {children}
            </Box>
        )
    }

    return (
        <Card
            display={"flex"}
            flexDirection={["column", "column", "column", "row"]}
            padding={"0.5em"}
            borderRadius={"10px"}
            minW={"250px"}
            width={"100%"}
            backgroundColor={"brand.500"}
            _hover={{ cursor: "pointer" }}
            overflow={"auto"}
            onClick={() => goToContract( router, contract.id)}
        >
            <Column>
                <Line  justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b">Nome:</Text>
                    <Text >{contract.name}</Text>
                </Line>

                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Plano: </Text>
                    <Text >{contract.plan}</Text>
                </Line>
            </Column>

            <Column>
                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Início do plano: </Text>
                    <Text >{contract.started}</Text>
                </Line>

                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b"  >Fim previsto: </Text>
                    <Text > {contract.ends}</Text>
                </Line>
            </Column>

            <Column>
                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Aulas disponíveis:</Text>
                    <Text >{contract.availableClasses}</Text>
                </Line>
            </Column>
        </Card>
    );
};

export default memo(ContractCard);
