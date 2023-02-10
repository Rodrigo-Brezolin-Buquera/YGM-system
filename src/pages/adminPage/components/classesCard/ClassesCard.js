import { Text } from "@chakra-ui/react";
import React from "react";
import { goToViewClass } from "../../../../routes/coordinator";
import { CardContainer, TextContainer } from "./styled";

const ClassesCard = (props) => {
    return (
        <CardContainer onClick={ () => goToViewClass(props.history, props.id)} >
            <TextContainer>
                <Text fontSize='lg' as="b"> {props.day} - {props.time}</Text>
                <Text> {props.teacher} - {props.name}  </Text>
            </TextContainer>
        </CardContainer>
    );
};

export default ClassesCard;
