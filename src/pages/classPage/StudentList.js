import { Text } from "@chakra-ui/react";
import StudentCheckinCard from "./StudentCheckinCard";

export const StudentList = ({ checkins,capacity, loading, setLoading }) => {
    const studentList = checkins?.length && checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}         
                id={checkin.id}
                verified={checkin.verified}
                name={checkin.name}
                capacity={capacity}
                loading={loading} 
                setLoading={setLoading}
            />
        );
    });
    return (
        <>
            <Text fontSize='xl' > Lista de checkins </Text>
            {checkins?.length ? studentList : <p> Sem check-ins até o momento </p>}
        </>
    );
};

