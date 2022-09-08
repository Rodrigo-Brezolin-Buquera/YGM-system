import React from 'react'
import { InfoContainer, FlexContainer } from './styled'
import {Text} from '@chakra-ui/react';
import { goToViewContract } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";

const UserInfo = (props) => { 
    const history = useHistory()

    return (
        <InfoContainer onClick={() => goToViewContract(history, props.id)} >
            <FlexContainer>
                <Text  >Nome:</Text>
                <Text >{props.name}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text >Plano: </Text>
                <Text >{props.plan} </Text>
            </FlexContainer>

            <FlexContainer>
                <Text >Início do plano: </Text>
                <Text > {props.planStarted}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text >Fim previsto: </Text>
                <Text > {props.planEnds}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text >Aulas disponíveis:</Text>
                <Text >{props.availableClasses}</Text>
            </FlexContainer>
        </InfoContainer>
    )
}

export default UserInfo
