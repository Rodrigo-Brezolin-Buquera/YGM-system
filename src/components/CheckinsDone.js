import { CircularProgress, Text } from "@chakra-ui/react";
import { useRequestData } from "../hooks/useRequestData";
import { CircularCard } from "../theme";
import { simplifyDate } from "../utils/dates";

export const CheckinsDone = ({ userId }) => {
    const {data:checkins, loading} = useRequestData(`/booking/contract/${userId}`, userId)
    
    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    const checkinsList = checkins?.length && checkins.map((checkin) => {
        return (
            <CircularCard
                key={checkin.id}
                color={"brand.200"}
                hover={"simple"}
            >
                <Text as="b" > {simplifyDate(checkin.date)} - {checkin.time} </Text>
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

