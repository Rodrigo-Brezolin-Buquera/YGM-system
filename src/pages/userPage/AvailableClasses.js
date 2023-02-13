import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { findItemWhere } from "../../api";
import { yogaClassesCol } from "../../api/config";
import { getToday } from "../../services/moment";
import ClassesCard from "./ClassesCard";

const AvailableClasses = ({ checkins, contractId, contractLimit }) => {
    const [yogaClasses, setyogaClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findItemWhere(yogaClassesCol, "date", getToday())
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
    }, [loading, contractId]);

    const classesList = yogaClasses.length && yogaClasses.map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}
                yogaClassId={yogaClass.id}
                day={yogaClass.day}
                time={yogaClass.time}
                teacher={yogaClass.teacher}
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
