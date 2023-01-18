import React from 'react'
import { Text } from '@chakra-ui/react'
import { TextContainer } from './styled';

const ClassInfo = (props) => {
    return (
        <TextContainer>
            <Text fontSize="xl" > Dia: {props.day} - {props.time} </Text>
            <Text fontSize="xl" > Data: {props.date} </Text>
            <Text fontSize="xl" > Prof.: {props.teacher} </Text>
            <Text fontSize="xl" > Estilo:  {props.name}  </Text>
        </TextContainer>
    )
}

export default ClassInfo
