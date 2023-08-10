import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { findItemWhere } from "../../api";
import { checkinsCol } from "../../api/config";
import StudentCheckinCard from "./StudentCheckinCard";

export const StudentList = ({ capacity, classId,loading, setLoading }) => {
    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        findItemWhere(checkinsCol, "yogaClassId", classId)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
    }, [loading, classId]);

    const studentList = checkins?.length && checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}
                checkin={checkin}
                capacity={capacity}
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

