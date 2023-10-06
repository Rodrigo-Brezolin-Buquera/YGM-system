import { CircularProgress, Text } from "@chakra-ui/react";
import { useRequestData } from "../../../hooks/useRequestData";
import StudentCheckinCard from "./StudentCheckinCard";

export const StudentList = ({ classId, loading }) => {
    const {data:checkins, loading: listLoading, setLoading:setListLoading} = useRequestData(`/booking/class/${classId}`, loading)
    
    if(listLoading) {
        return <CircularProgress isIndeterminate color="brand.200" size="120px" />

    }

    const studentList = checkins?.length && checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}
                checkin={checkin}
                loading={listLoading}
                setLoading={setListLoading}
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

