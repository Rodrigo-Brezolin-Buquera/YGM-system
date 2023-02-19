import { Text  } from "@chakra-ui/react";
import { goToClass } from "../../routes/coordinator";
import SquareCard from "../../theme/SquareCard";

const ClassesCard = (props) => {
    return (
        <SquareCard
         
            onClick={() => goToClass(props.navigate, props.id)}
        >
            <Text fontSize='lg' as="b" textAlign={"center"} > {props.day} - {props.time}</Text>
            <Text textAlign={"center"} > {props.teacher} - {props.name}  </Text>
        </SquareCard>
    );
};

export default ClassesCard;
