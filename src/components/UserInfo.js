import { Box, Text } from "@chakra-ui/react";

const Line = ({children}) => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            gap={"0.5em"}
            m={"0.5em"}
        >
            {children}
        </Box>
    );
}

const UserInfo = (props) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            p={"1m"}
            borderRadius={"25px"}
            minW={"250px"}
            onClick={props.handler}
        >
            <Line>
                <Text as='b' fontSize='lg' >Nome:</Text>
                <Text fontSize='lg' >{props.name}</Text>
            </Line>

            <Line>
                <Text as='b' fontSize='lg' >Plano: </Text>
                <Text fontSize='lg' >{props.plan} </Text>
            </Line>

            <Line>
                <Text as='b' fontSize='lg' >Início do plano: </Text>
                <Text fontSize='lg' > {props.planStarted}</Text>
            </Line>

            <Line>
                <Text as='b' fontSize='lg' >Fim previsto: </Text>
                <Text fontSize='lg' > {props.planEnds}</Text>
            </Line>

            <Line>
                <Text as='b' fontSize='lg' >Aulas disponíveis:</Text>
                <Text fontSize='lg' >{props.availableClasses}</Text>
            </Line>
        </Box>
    );
};

export default UserInfo;
