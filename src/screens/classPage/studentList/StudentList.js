import { Text } from "@chakra-ui/react";
import { useRequestData } from "../../../hooks/useRequestData";
import StudentCheckinCard from "./StudentCheckinCard";

export const StudentList = ({ classId, reload }) => {
    const {data:checkins} = useRequestData(`/booking/class/${classId}`, reload)
    
  
    console.log("lista", checkins)

    const studentList = checkins?.length ? checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}
                checkin={checkin}  
            />
        );
    }):
    null

    return (
        <>
            <Text fontSize='xl' > Checkins </Text>
            {studentList}
        </>
    );
};

