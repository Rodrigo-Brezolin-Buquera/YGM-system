import { Box, Text } from "@chakra-ui/react";
import { simplifyDate } from "../../services/moment";

export const ClassInfo = ({day, time, date, teacher, name, capacity}) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5em"}
            margin={"1em 0"}
            fontSize="xl"
        >
            <Text  fontWeight={"bold"}>  {day} - {time} </Text>
            <Text  > Data: {simplifyDate(date)} </Text>
            <Text  > Prof.: {teacher} </Text>
            <Text  > Estilo:  {name}  </Text>
            <Text  > Vagas:  {capacity}  </Text>

        </Box>
    );
};

