import { Text, Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { findItemWhere } from "../../api";
import { calendarCol } from "../../api/config";
import { simplifyDate } from "../../services/moment";
import { CircularCard } from "../../theme";

// adapatar
export const DayColumn = ({ day, date }) => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        // findItemWhere(calendarCol, "date", date)
        //     .then(res => setClasses(res))
        //     .catch(err => console.log(err.message))

    }, [date])

    // ver o memo faz sentido
    const ClassCard = useMemo(yogaClass => {
        return (
            <CircularCard color={"brand.200"} >
                <Text fontSize="3xl" >{yogaClass.time}</Text>
                <Text fontSize="3xl" >{yogaClass.capacity}</Text>
            </CircularCard>
        );
    }, [])

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"1em"}
        >
            <Text fontWeight={"bold"}> {simplifyDate(date)} </Text>
            <CircularCard
                color={"brand.100"}
            >
                <Text color={"white"} fontSize="xl">{day}</Text>
            </CircularCard>
            {classes?.map((i) => <ClassCard key={i.time} yogaClass={i} />)}
        </Box>
    );
};