import { Box, CircularProgress } from "@chakra-ui/react";
import {  useEffect,  useState } from "react";
import ClassCard from "./ClassCard";
import ColumnHeader from "./ColumnHeader";

const DayColumn = ({ day, date, navigate, setSelected, yogaClasses }) => {
    const [classes, setClasses] = useState(null)

    useEffect(() => {
        setClasses(yogaClasses)
    }, [date, yogaClasses])

    const list = classes?.length ? classes?.map((yogaClass) => {

        return (
            <ClassCard
                key={day}
                yogaClass={yogaClass}
                setSelected={setSelected}
                navigate={navigate}

            />)
    }) : null

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"0.5em"}
            minH={"250px"}
        >
            <ColumnHeader date={date} day={day}/>


            {  list }
        </Box>
    );
};

export default DayColumn;