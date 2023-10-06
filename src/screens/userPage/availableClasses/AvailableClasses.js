import { Box, CircularProgress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { findClassesByPeriod } from "../../../api/calendar";
import { WrapContainer } from "../../../theme";
import { getNextNDays, sortByDayAndTime } from "../../../utils/dates";
import {ClassesCard} from "./ClassesCard";
import { useAvailableClassesLogic } from "./useAvailableClassesLogic";

const AvailableClasses = ({ contractId, contractLimit, name,  }) => {
    const {yogaClasses, loading} = useAvailableClassesLogic(contractId)


    console.log(yogaClasses)

    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    const classesList = yogaClasses?.length && yogaClasses.map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}               
                userName={name}
                contractId={contractId}
                contractLimit={contractLimit}
                yogaClass={yogaClass}
            />
        );
    });

    return (
        <>
            <Text fontSize='lg' as="b" > Faça seu check-in</Text>
            <WrapContainer  >
            {classesList.length ? classesList : <Text fontSize='lg' > Não há aulas disponíveis </Text>}

            </WrapContainer>
        </>
    );
};

export default AvailableClasses;
