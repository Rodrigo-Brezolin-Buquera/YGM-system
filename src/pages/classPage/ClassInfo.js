import { Box, Text } from "@chakra-ui/react";

export const ClassInfo = ({day, time, date, teacher, name}) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5em"}
            margin={"1em 0"}
        >
            <Text fontSize="xl" > Dia: {day} - {time} </Text>
            <Text fontSize="xl" > Data: {date} </Text>
            <Text fontSize="xl" > Prof.: {teacher} </Text>
            <Text fontSize="xl" > Estilo:  {name}  </Text>
        </Box>
    );
};

