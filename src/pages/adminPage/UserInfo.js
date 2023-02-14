import { Text, Box, Card } from "@chakra-ui/react";
import { memo } from "react";
import { goToContract } from "../../routes/coordinator";
import { Column, Line } from "../../theme";

const UserInfo = (props) => {
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
            status={props.status}
            overflow={"auto"}
            onClick={() => goToContract(props.navigate, props.id)}
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

export default memo(UserInfo);
