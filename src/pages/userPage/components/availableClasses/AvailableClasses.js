import { Text } from "@chakra-ui/react";
import React from "react";
import ClassesCard from "../classesCard/ClassesCard";
import { ClassesListContainer } from "./styled";

const AvailableClasses = ({ yogaClasses, checkins, contractId, loading, setLoading }) => {
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
                loading={loading}
                setLoading={setLoading}
            />
        );
    });

    return (
        <ClassesListContainer>
            <Text fontSize='lg' as="b" > Faça seu check-in:</Text>
            {classesList.length ? classesList : <Text fontSize='lg' > Não há aulas disponíveis </Text>}
        </ClassesListContainer>
    );
};

export default AvailableClasses;
