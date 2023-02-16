import { Heading, Button } from "@chakra-ui/react"
import { WrapContainer } from "../../theme";
import { DayColumn } from "./DayColumn";
import { getSundayOfCurrentWeek, getDatesOfWeek } from "../../services/moment"
import { findClassesByPeriod } from "../../api/calendar";
import { useEffect, useState } from "react";


export const WeekCalendar = ( { navigate, setSelected, loading }) => {
    const [sunday, setSunday] = useState(getSundayOfCurrentWeek());
    const [datesOfWeek, setDatesOfWeek] = useState(getDatesOfWeek(sunday));
    const [yogaClasses, setYogaClasses] = useState([]);

    const handleNextWeekClick = () => {
        const nextSunday = new Date(sunday?.getTime() + 7 * 24 * 3600 * 1000);
        setSunday(nextSunday);
        setDatesOfWeek(getDatesOfWeek(nextSunday));
    }

    const handlePreviousWeekClick = () => {
        const previousSunday = new Date(sunday?.getTime() - 7 * 24 * 3600 * 1000);
        setSunday(previousSunday);
        setDatesOfWeek(getDatesOfWeek(previousSunday));
    }

    useEffect(() => {
        findClassesByPeriod(datesOfWeek)
            .then(res => setYogaClasses(res))
            .catch(err => console.log(err))
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



