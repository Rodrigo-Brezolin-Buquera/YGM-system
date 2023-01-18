import React from 'react'
import { InfoContainer, FlexContainer } from './styled'
import { Text } from '@chakra-ui/react'


const UserInfo = (props) => {
    return (
        <InfoContainer  >
            <FlexContainer>
                <Text as='b' fontSize='lg' >Nome:</Text>
                <Text fontSize='lg' >{props.name}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text as='b' fontSize='lg' >Plano: </Text>
                <Text fontSize='lg' >{props.plan} </Text>
            </FlexContainer>

            <FlexContainer>
                <Text as='b' fontSize='lg' >Início do plano: </Text>
                <Text fontSize='lg' > {props.planStarted}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text as='b' fontSize='lg' >Fim previsto: </Text>
                <Text fontSize='lg' > {props.planEnds}</Text>
            </FlexContainer>

            <FlexContainer>
                <Text as='b' fontSize='lg' >Aulas disponíveis:</Text>
                <Text fontSize='lg' >{props.availableClasses}</Text>
            </FlexContainer>
        </InfoContainer>
    )
}

export default UserInfo
