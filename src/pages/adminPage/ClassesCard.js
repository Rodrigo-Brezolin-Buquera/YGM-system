import { Text, Card } from "@chakra-ui/react";
import { goToClass } from "../../routes/coordinator";

const ClassesCard = (props) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            backgroundColor={"brand.500"}
            minW={"180px"}
            w={"70%"}
            gap={"0.5em"}
            borderRadius={"10px"}
            p={"0.5em"}
            _hover={{ cursor: "pointer" }}
            onClick={() => goToClass(props.history, props.id)}
        >
            <Text fontSize='lg' as="b" textAlign={"center"} > {props.day} - {props.time}</Text>
            <Text textAlign={"center"} > {props.teacher} - {props.name}  </Text>
        </Card>
    );
};

export default ClassesCard;
