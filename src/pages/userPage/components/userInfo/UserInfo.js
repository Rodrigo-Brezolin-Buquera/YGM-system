import React from 'react'
import { InfoContainer, FlexContainer } from './styled'
import { Text } from '@chakra-ui/react'


const UserInfo = (props) => { 
    return (
        <InfoContainer  >
            <FlexContainer>
                <Text  fontSize='lg' >Nome:</Text>
                <Text >{props.name}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize='lg' >Plano: </Text>
                <Text >{props.plan} </Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize='lg' >Início do plano: </Text>
                <Text > {props.planStarted}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize='lg' >Fim previsto: </Text>
                <Text > {props.planEnds}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text fontSize='lg' >Aulas disponíveis:</Text>
                <Text >{props.availableClasses}</Text>
            </FlexContainer>
        </InfoContainer>
    )
}

export default UserInfo
