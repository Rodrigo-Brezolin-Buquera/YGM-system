import { Text } from "@chakra-ui/react";
import { simplifyDate } from "../utils/dates";
import { CircularCard } from "../theme";
import { findCheckinsLimit } from "../api/checkins";
import { useState, useEffect } from "react";


export const CheckinsDone = ({ userId }) => {
    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        findCheckinsLimit(userId, 5)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))

    }, [userId]);


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

