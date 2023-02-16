import { Text, Box } from "@chakra-ui/react";
import { useEffect,  useState } from "react";
import { goToClass } from "../../routes/coordinator"
import { simplifyDate } from "../../utils/dates";
import { CircularCard } from "../../theme";

export const DayColumn = ({ day, date, navigate, setSelected, yogaClasses }) => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        setClasses(yogaClasses)
    }, [date, yogaClasses])

    // memo?
    const list =  classes?.length && classes?.map((yogaClass) => {
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
            minH={"250px"}
        >
            <Text fontWeight={"bold"} fontSize="xl"> {simplifyDate(date)} </Text>
            <CircularCard
                color={"brand.100"}
            >
                <Text color={"white"} fontSize="xl">{day}</Text>
            </CircularCard>
            {list || null}
        </Box>
    );
};