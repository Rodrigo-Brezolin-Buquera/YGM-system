import { Heading, Button } from "@chakra-ui/react"
import {  useCallback, useEffect, useState } from "react";
import { findClassesByPeriod } from "../../api/calendar";
import { WrapContainer } from "../../theme";
import { getSundayOfCurrentWeek, getDatesOfWeek } from "../../utils/dates"
import  DayColumn  from "./DayColumn";


export const WeekCalendar = ( { navigate, setSelected, loading }) => {
    const [sunday, setSunday] = useState((getSundayOfCurrentWeek()));
    const [datesOfWeek, setDatesOfWeek] = useState(getDatesOfWeek(sunday));
    const [yogaClasses, setYogaClasses] = useState([]);

    const handleNextWeekClick = useCallback(() => {
        const nextSunday = new Date(sunday?.getTime() + 7 * 24 * 3600 * 1000);
        setSunday(nextSunday);
        setDatesOfWeek(getDatesOfWeek(nextSunday));
    },[sunday])

    const handlePreviousWeekClick = useCallback(() => {
        const previousSunday = new Date(sunday?.getTime() - 7 * 24 * 3600 * 1000);
        setSunday(previousSunday);
        setDatesOfWeek(getDatesOfWeek(previousSunday));
    },[sunday])

    useEffect(() => {
        findClassesByPeriod(datesOfWeek)
            .then(res => setYogaClasses(res))
            .catch(err => console.log(err.message))
    }, [sunday, datesOfWeek,  loading])

    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const list = daysOfWeek.map((day, i) => {
        const classes = yogaClasses?.length && yogaClasses.filter(a => a.day === day)
        return (
            <DayColumn
                key={day}
                date={datesOfWeek[i]}
                yogaClasses={classes}
                day={day}
                navigate={navigate}
                setSelected={setSelected}
            />
        )
    })

    return (
        <>
            <WrapContainer>
                <Button backgroundColor={"brand.200"} onClick={handlePreviousWeekClick}>Semana anterior</Button>
                <Heading  >Agenda semanal</Heading>
                <Button backgroundColor={"brand.200"} onClick={handleNextWeekClick}>Próxima Semana</Button>
            </WrapContainer>

            <WrapContainer>
                {list}
            </WrapContainer>
        </>
    );
}



