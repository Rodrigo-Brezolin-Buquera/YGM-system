import { Text, Box } from "@chakra-ui/react";
import { CircularCard } from "../theme";

const CheckinsDone = ({ checkins }) => {
    const checkinsList = checkins?.length && checkins.map((checkin) => {
        return (
            <CircularCard   
                color={"brand.200"}
                hover={"simple"}
            >
                <Text as="b" > "checkin.date"</Text>
            </CircularCard>
        );
    });

    return (
        <>
            <Text fontSize='lg' as="b" > Checkins realizados: </Text>
            {checkins?.length ? checkinsList : <Text> Não há check-ins</Text>}
        </>
    );
};

export default CheckinsDone;
