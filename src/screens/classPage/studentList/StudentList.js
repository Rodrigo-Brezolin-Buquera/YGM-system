import { CircularProgress, Text } from "@chakra-ui/react";
import { useRequestData } from "../../../hooks/useRequestData";
import StudentCheckinCard from "./StudentCheckinCard";

export const StudentList = ({ classId,loading, setLoading }) => {
    const {data:checkins, loading: listLoading} = useRequestData(`/booking/class/${classId}`, loading)
    
    if(listLoading) {
        return <CircularProgress isIndeterminate color="brand.200" size="120px" />

    }

    const studentList = checkins?.length && checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}
                checkin={checkin}
                setLoading={setLoading}
            />
        );
    });

    return (
        <>
            <Text fontSize='xl' > Checkins </Text>
            {checkins?.length ? studentList : <p> Nenhum até o momento </p>}
        </>
    );
};

