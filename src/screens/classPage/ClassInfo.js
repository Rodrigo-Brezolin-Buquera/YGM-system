import {  Text } from "@chakra-ui/react";
import { memo } from "react";
import { TextContainer } from "../../theme";
import { simplifyDate } from "../../utils/dates";

const ClassInfo = ({ yogaClass }) => {
    return (
        <TextContainer
            alignItems={"center"}
        >
            <Text fontWeight={"bold"}>  {yogaClass.day} - {tyogaClass.ime} </Text>
            <Text  > Data: { simplifyDate(yogaClass.date)} </Text>
            <Text  > Prof.: {yogaClass.teacher} </Text>
            <Text  > Estilo:  {yogaClass.name}  </Text>

        </TextContainer>
    );
};

export default memo(ClassInfo)