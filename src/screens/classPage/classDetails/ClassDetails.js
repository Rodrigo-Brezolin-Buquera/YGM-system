import {  CircularProgress, Text } from "@chakra-ui/react";
import { memo } from "react";
import { TextContainer } from "../../../theme";
import { simplifyDate } from "../../../utils/dates";

const ClassDetails = ({ yogaClass }) => {

    if(!yogaClass.date) {
        return <CircularProgress isIndeterminate color="brand.200" size="120px" />
    }

    return (
        <TextContainer
            alignItems={"center"}
        >
            <Text fontWeight={"bold"}>  {yogaClass.day} - {yogaClass.time} </Text>
            <Text  > Data: { simplifyDate(yogaClass.date)} </Text>
            <Text  > Prof.: {yogaClass.teacher} </Text>
            <Text  > Estilo:  {yogaClass.name}  </Text>

        </TextContainer>
    );
};

export default memo(ClassDetails)