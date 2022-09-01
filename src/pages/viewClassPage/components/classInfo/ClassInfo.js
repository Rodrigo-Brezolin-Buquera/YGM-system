import React from 'react'
import { Text } from '@chakra-ui/react'
import { TextContainer } from './styled';

const ClassInfo = (props) => {
    return (
        <TextContainer>
            <Text  > Dia: {props.day} - {props.time} </Text>
            <Text  > Data: {props.date} </Text>
            <Text> Prof.: {props.teacher} </Text>
            <Text> Estilo:  {props.name}  </Text>    
        </TextContainer>
    )
}

export default ClassInfo
