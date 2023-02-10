import { Text, Box } from "@chakra-ui/react";
import { goToViewContract } from "../../routes/coordinator";

const UserInfoList = (props) => {

    const Line = ({ children }) => {
        return (
            <Box
                display={"flex"}
                justifyContent={["center", "center", "flex-start"]}
                gap={"0.3em"}
                m={"0.1em"}
            >
                {children}
            </Box>
        );
    }

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
        );
    }

    return (
        <Box
            display={"flex"}
            flexDirection={["column", "row", "row"]}
            padding={"0.5em"}
            borderRadius={"10px"}
            border={"1px solid black"}
            minW={"250px"}
            width={["95%","90%","90%"]}
            backgroundColor={"white"}
            _hover={{ cursor: "pointer" }}
            status={props.status}
            onClick={() => goToViewContract(props.navigate, props.id)}
        >

            <Column>
                <Line>
                    <Text as="b">Nome:</Text>
                    <Text >{props.name}</Text>
                </Line>

                <Line>
                    <Text as="b" >Plano: </Text>
                    <Text >{props.plan}</Text>
                </Line>
            </Column>

            <Column>
                <Line>
                    <Text as="b" >Início do plano: </Text>
                    <Text >{props.started}</Text>
                </Line>

                <Line>
                    <Text as="b"  >Fim previsto: </Text>
                    <Text > {props.ends}</Text>
                </Line>
            </Column>

            <Column>
                <Line>
                    <Text as="b" >Aulas disponíveis:</Text>
                    <Text >{props.availableClasses}</Text>
                </Line>
            </Column>

        </Box>
    );
};

export default UserInfoList;
