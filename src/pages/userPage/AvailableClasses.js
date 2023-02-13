import { Text } from "@chakra-ui/react";
import ClassesCard from "./ClassesCard";

const AvailableClasses = ({ yogaClasses, checkins, contractId, loading, setLoading, contractLimit }) => {
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
