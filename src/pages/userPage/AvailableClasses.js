import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { findClassesByPeriod } from "../../api/calendar";
import { getNextNDays } from "../../utils/dates";
import ClassesCard from "./ClassesCard";

const AvailableClasses = ({ checkins, contractId, contractLimit, userName, loading, setLoading }) => {
    const [yogaClasses, setyogaClasses] = useState([]);

    useEffect(() => {
        findClassesByPeriod(getNextNDays(5))
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
    }, [loading, contractId]);

    const classesList = yogaClasses.length && yogaClasses.map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}
                yogaClassId={yogaClass.id}
                day={yogaClass.day}
                date={yogaClass.date}
                time={yogaClass.time}
                teacher={yogaClass.teacher}
                userName={userName}
                name={yogaClass.name}
                capacity={yogaClass.capacity}
                checkins={checkins}
                contractId={contractId}
                contractLimit={contractLimit}
                loading={loading}
                setLoading={setLoading}
            />
        );
    });

    return (
        <>
            <Text fontSize='lg' as="b" > Faça seu check-in:</Text>
            {classesList.length ? classesList : <Text fontSize='lg' > Não há aulas disponíveis </Text>}
        </>
    );
};

export default AvailableClasses;
