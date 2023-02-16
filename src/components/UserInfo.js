import {  Heading, Text } from "@chakra-ui/react";
import { memo } from "react";
import { Line, TextContainer } from "../theme";

const UserInfo = (props) => {
    return (
        < TextContainer
            alignItems={"center"}
        >
            <Heading size={"md"}>Informações do plano</Heading>
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
        </TextContainer>
    );
};

export default memo(UserInfo);
