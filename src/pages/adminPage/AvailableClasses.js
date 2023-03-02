import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findItemWhere,  } from "../../api";
import {  calendarCol } from "../../api/config";
import { getToday, sortByTime } from "../../utils/dates";
import ClassesCard from "./ClassesCard";


const AvailableClasses = ({ navigate }) => {
    const [yogaClasses, setyogaClasses] = useState([]);
    

    useEffect(() => {
      
        findItemWhere(calendarCol, "date", getToday())
            .then(res => setyogaClasses(sortByTime(res)))
            .catch(err => console.log(err.message))
    }, [ ]);

    const classesList = yogaClasses.length && yogaClasses.map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}
                id={yogaClass.id}
                day={yogaClass.day}
                time={yogaClass.time}
                teacher={yogaClass.teacher}
                name={yogaClass.name}
                navigate={navigate}
            />
        );
    });

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5em"}
            width={"100%"}
        >
            <Text fontSize='xl' > Aulas de hoje:</Text>
            {classesList.length ? classesList : <p> Não há aulas hoje </p>}
        </Box>
    );
};

export default AvailableClasses;
