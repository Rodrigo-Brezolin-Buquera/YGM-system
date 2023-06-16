import { Text  } from "@chakra-ui/react";
import { memo } from "react";
import { goToClass } from "../../routes/coordinator";
import {SquareCard} from "../../theme";

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

export default memo(ClassesCard);
