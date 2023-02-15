import { Text, Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { findItemWhere } from "../../api";
import { calendarCol } from "../../api/config";
import { simplifyDate } from "../../services/moment";
import { CircularCard } from "../../theme";
import { goToClass } from "../../routes/coordinator"

export const DayColumn = ({ day, date, navigate, setSelected }) => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        findItemWhere(calendarCol, "date", date)
            .then(res => setClasses(res))
            .catch(err => console.log(err.message))
    }, [date])

    // memo?
    const list = classes?.map((yogaClass) => {
        return (
            <CircularCard
                key={yogaClass.id}
                color={"brand.200"}
                onClick={() => setSelected(yogaClass)}
                onDoubleClick={() => goToClass(navigate, yogaClass.id)}
            >
                <Text fontSize="xl" >{yogaClass?.time}</Text>
                <Text fontSize="sm" >Vagas:  {yogaClass?.capacity}</Text>
            </CircularCard>)
    })

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"0.5em"}
        >
            <Text fontWeight={"bold"} fontSize="xl"> {simplifyDate(date)} </Text>
            <CircularCard
                color={"brand.100"}
            >
                <Text color={"white"} fontSize="xl">{day}</Text>
            </CircularCard>
            {list}
        </Box>
    );
};