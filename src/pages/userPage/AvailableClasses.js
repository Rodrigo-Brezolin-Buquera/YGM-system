import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { findClassesByPeriod } from "../../api/calendar";
import { getNextNDays, sortByDayAndTime } from "../../utils/dates";
import {ClassesCard} from "./ClassesCard";

const AvailableClasses = ({ contractId, contractLimit, userName }) => {
    const [yogaClasses, setyogaClasses] = useState([]);

    useEffect(() => {
        findClassesByPeriod(getNextNDays(5))
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
    }, [ contractId]);

    const classesList = yogaClasses?.length && sortByDayAndTime(yogaClasses).map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}               
                userName={userName}
                contractId={contractId}
                contractLimit={contractLimit}
                yogaClass={yogaClass}     
            />
        );
    });

    return (
        <>
            <Text fontSize='lg' as="b" > Faça seu check-in</Text>
            {classesList.length ? classesList : <Text fontSize='lg' > Não há aulas disponíveis </Text>}
        </>
    );
};

export default AvailableClasses;
