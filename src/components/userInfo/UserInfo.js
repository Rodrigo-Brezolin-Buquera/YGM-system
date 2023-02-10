import { Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { goToViewContract } from "../../routes/coordinator";
import { InfoContainer, FlexContainer } from "./styled";

const UserInfo = (props) => {
    const history = useHistory();

    return (
        <InfoContainer onClick={() => goToViewContract(history, props.id)} >
            <FlexContainer>
                <Text fontSize="xl" >Nome:</Text>
                <Text fontSize="xl" >{props.name}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize="xl"  >Plano: </Text>
                <Text fontSize="xl" >{props.plan} </Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize="xl"  >Início do plano: </Text>
                <Text fontSize="xl" > {props.planStarted}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize="xl"  >Fim previsto: </Text>
                <Text fontSize="xl" > {props.planEnds}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize="xl" >Aulas disponíveis:</Text>
                <Text fontSize="xl" >{props.availableClasses}</Text>
            </FlexContainer>
        </InfoContainer>
    );
};

export default UserInfo;
