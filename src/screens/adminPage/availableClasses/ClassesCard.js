import { Text } from "@chakra-ui/react";
import { memo } from "react";
import { goToClass } from "../../../utils/coordinator";
import { SquareCard } from "../../../theme";

const ClassesCard = ({ yogaClass, router }) => {

    return (
        <SquareCard
            onClick={() => goToClass(router, yogaClass.id)}
        >
            <Text
                fontSize='lg'
                as="b"
                textAlign={"center"}
            >
                {yogaClass.day} - {yogaClass.time}
            </Text>
            <Text
                textAlign={"center"}
            >
                {yogaClass.teacher} - {yogaClass.name}
            </Text>
        </SquareCard>
    );
};

export default memo(ClassesCard);
