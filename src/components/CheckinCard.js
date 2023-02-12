import { Box, Text } from "@chakra-ui/react";

const CheckinCard = ({ checkin }) => {

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={"25px"}
            gap={"0.1em"}
            minW={"150px"}
            backgroundColor={"brand.200"}
            p={"0.3em"}

        >
            <Text as="b" > {checkin.date}</Text>
        </Box>
    );
};

export default CheckinCard;
