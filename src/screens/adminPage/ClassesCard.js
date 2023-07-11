import { Text  } from "@chakra-ui/react";
import { memo } from "react";
import { goToClass } from "../../routes/coordinator";
import {SquareCard} from "../../theme";
import { useRouter } from 'next/router';

const ClassesCard = (props) => {
    const router = useRouter();

    return (
        <SquareCard
         
            onClick={() => goToClass(router, props.id)}
        >
            <Text fontSize='lg' as="b" textAlign={"center"} > {props.day} - {props.time}</Text>
            <Text textAlign={"center"} > {props.teacher} - {props.name}  </Text>
        </SquareCard>
    );
};

export default memo(ClassesCard);
