import { Text} from "@chakra-ui/react";
import React from "react";
import CheckinCard from "./CheckinCard";

const CheckinsDone = ({checkins}) => {
    const checkinsList = checkins?.length && checkins.map((checkin) => {
        return (
            <CheckinCard
                key={checkin.id }
                checkin={checkin}                
            />
        );
    });
    
    return ( 
        <>
            <Text fontSize='lg' as="b" > Checkins realizados: </Text>
            { checkins?.length ? checkinsList : <p> Não há check-ins no momento </p> }
        </>
    );
};

export default CheckinsDone;
