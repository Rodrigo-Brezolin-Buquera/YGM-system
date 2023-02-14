import { Text, Box } from "@chakra-ui/react";

const CheckinsDone = ({ checkins }) => {
    const checkinsList = checkins?.length && checkins.map((checkin) => {
        return (
            <Box
                key={checkin.id}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                borderRadius={"25px"}
                gap={"0.1em"}
                minW={"150px"}
                backgroundColor={"brand.200"}
                p={"0.3em"}

            >
                <Text as="b" > {checkin}</Text>
            </Box>
        );
    });

    return (
        <>
            <Text fontSize='lg' as="b" > Checkins realizados: </Text>
            {checkins?.length ? checkinsList : <p> Não há check-ins no momento </p>}
        </>
    );
};

export default CheckinsDone;
