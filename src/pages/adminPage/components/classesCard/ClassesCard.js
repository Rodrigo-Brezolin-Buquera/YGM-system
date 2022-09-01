import React from 'react'
import { CardContainer, TextContainer } from './styled'
import { Text } from '@chakra-ui/react'
import { goToViewClass } from "../../../../routes/coordinator";

const ClassesCard = (props) => {
    return (
        <CardContainer onClick={ () => goToViewClass(props.history, props.id)} >
            <TextContainer>
                <Text fontSize='lg'> {props.day} - {props.time}</Text>
                <Text> {props.teacher} - {props.name}  </Text>
            </TextContainer>
        </CardContainer>
    )
}

export default ClassesCard
