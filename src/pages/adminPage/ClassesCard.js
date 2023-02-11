import { Text, Box } from "@chakra-ui/react";
import { goToViewClass } from "../../routes/coordinator";
import { colors } from "../../theme/colors";

const ClassesCard = (props) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            backgroundColor={colors.lightNeutral}
            width={"180px"}
            gap={"0.5em"}
            borderRadius={"10px"}
            p={"0.5em"}
            _hover={{ cursor: "pointer" }}
            onClick={() => goToViewClass(props.history, props.id)}
        >
            <Text fontSize='lg' as="b" textAlign={"center"} > {props.day} - {props.time}</Text>
            <Text textAlign={"center"} > {props.teacher} - {props.name}  </Text>
        </Box>
    );
};

export default ClassesCard;