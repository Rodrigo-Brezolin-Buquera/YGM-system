import { Box, Text } from "@chakra-ui/react";
import { simplifyDate } from "../../services/moment";
import { TextContainer } from "../../theme";

export const ClassInfo = ({ day, time, date, teacher, name, capacity }) => {
    return (
        <TextContainer
            alignItems={"center"}
        >
            <Text fontWeight={"bold"}>  {day} - {time} </Text>
            <Text  > Data: {simplifyDate(date)} </Text>
            <Text  > Prof.: {teacher} </Text>
            <Text  > Estilo:  {name}  </Text>

        </TextContainer>
    );
};

