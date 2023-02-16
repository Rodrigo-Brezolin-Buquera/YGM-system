import { Text } from "@chakra-ui/react";
import { simplifyDate } from "../utils/dates";
import { CircularCard } from "../theme";

const CheckinsDone = ({ checkins }) => {
    const checkinsList = checkins?.length && checkins.map((checkin) => {
        return (
            <CircularCard 
                key={checkin.id}  
                color={"brand.200"}
                hover={"simple"}
            >
                <Text as="b" > {simplifyDate(checkin.date)} -{checkin.time} </Text>
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
