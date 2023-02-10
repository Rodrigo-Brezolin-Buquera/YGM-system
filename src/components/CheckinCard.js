import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../theme/colors"

const CheckinCard = ({ checkin }) => {

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={"25px"}
            gap={"0.1em"}
            minW={"150px"}
            backgroundColor={colors.secondary}
            p={"0.3em"}

        >
            <Text as="b" > {checkin.date}</Text>
        </Box>
    );
};

export default CheckinCard;
