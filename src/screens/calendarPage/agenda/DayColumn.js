import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { formatDate, sortByDayAndTime } from "../../../utils/dates";
import ClassCard from "./ClassCard";
import { CircularCard } from "../../../theme"

const DayColumn = ({ day, date, yogaClasses, router }) => {
    const [classes, setClasses] = useState(null) 

    useEffect(() => {
        setClasses(yogaClasses)
    }, [date, yogaClasses])

    const list = classes?.length ? sortByDayAndTime(classes).map((yogaClass) => {
        return (
          <ClassCard
            key={yogaClass.id}
            yogaClass={yogaClass}
            router={router}
          />
        );
      }) : null;

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"0.5em"}
            minH={"250px"}
        >
            <Text fontWeight={"bold"} fontSize="xl">
                {formatDate(date, "DD/MM")}
            </Text>
            <CircularCard color={"brand.100"}>
                <Text color={"white"} fontSize="xl">
                    {day}
                </Text>
            </CircularCard>

            {list}
        </Box>
    );
};

export default DayColumn;