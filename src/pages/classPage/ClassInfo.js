import {  Text } from "@chakra-ui/react";
import { simplifyDate } from "../../utils/dates";
import { TextContainer } from "../../theme";
import { memo } from "react";

const ClassInfo = ({ day, time, date, teacher, name  }) => {
    return (
        <TextContainer
            alignItems={"center"}
        >
            <Text fontWeight={"bold"}>  {day} - {time} </Text>
            <Text  > Data: { simplifyDate(date)} </Text>
            <Text  > Prof.: {teacher} </Text>
            <Text  > Estilo:  {name}  </Text>

        </TextContainer>
    );
};

export default memo (ClassInfo);