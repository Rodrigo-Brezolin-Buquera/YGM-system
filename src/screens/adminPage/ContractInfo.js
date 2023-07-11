import { Text,  Card, Box } from "@chakra-ui/react";
import { memo } from "react";
import { goToContract } from "../../routes/coordinator";
import { Line } from "../../theme";
import { useRouter } from 'next/router';

const ContractInfo = (props) => {
    const router = useRouter();

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
            onClick={() => goToContract( router, props.id)}
        >
            <Column>
                <Line  justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b">Nome:</Text>
                    <Text >{props.name}</Text>
                </Line>

                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Plano: </Text>
                    <Text >{props.plan}</Text>
                </Line>
            </Column>

            <Column>
                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Início do plano: </Text>
                    <Text >{props.started}</Text>
                </Line>

                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b"  >Fim previsto: </Text>
                    <Text > {props.ends}</Text>
                </Line>
            </Column>

            <Column>
                <Line justifyContent={["center", "center", "center", "flex-start"]}>
                    <Text as="b" >Aulas disponíveis:</Text>
                    <Text >{props.availableClasses}</Text>
                </Line>
            </Column>
        </Card>
    );
};

export default memo(ContractInfo);
