import { Text } from "@chakra-ui/react";
import StudentCheckinCard from "./StudentCheckinCard";
import { useEffect, useState } from "react";
import { checkinsCol } from "../../api/config";
import { findItemWhere } from "../../api";

export const StudentList = ({ capacity, classId }) => {
    const [checkins, setCheckins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findItemWhere(checkinsCol, "yogaClassId", classId)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
    }, [loading, classId]);


    const studentList = checkins?.length && checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}
                id={checkin.id}
                verified={checkin.verified}
                name={checkin.name}
                contractless={checkin.contractless}
                capacity={capacity}
                loading={loading}
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

