import { Text } from "@chakra-ui/react";
import { useRequestData } from "../../../hooks/useRequestData";
import StudentCheckinCard from "./StudentCheckinCard";

export const StudentList = ({ classId, reload, setReload }) => {
    const {data:checkins} = useRequestData(`/booking/class/${classId}`, reload)
    
    const studentList = checkins?.length ? checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}
                checkin={checkin}  
                setReload={setReload}
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

