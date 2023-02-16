import { useEffect, useState } from "react";
import { Heading, Button } from "@chakra-ui/react"
import { WrapContainer } from "../../theme";
import { DayColumn } from "./DayColumn";
import { findClassesByPeriod } from "../../api/calendar";

export const WeekCalendar = ({ navigate, setSelected, loading }) => {
    const [sunday, setSunday] = useState(getSundayOfCurrentWeek());
    const [datesOfWeek, setDatesOfWeek] = useState(getDatesOfWeek(sunday));
    const [yogaClass, setYogaClass] = useState([]);


    const handleNextWeekClick = () => {
        const nextSunday = new Date(sunday.getTime() + 7 * 24 * 3600 * 1000);
        setSunday(nextSunday);
        setDatesOfWeek(getDatesOfWeek(nextSunday));
    }

    const handlePreviousWeekClick = () => {
        const previousSunday = new Date(sunday.getTime() - 7 * 24 * 3600 * 1000);
        setSunday(previousSunday);
        setDatesOfWeek(getDatesOfWeek(previousSunday));
    }

    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    useEffect(() => {
        findClassesByPeriod(datesOfWeek)
            .then(res => setYogaClass(res))
            .catch(err => console.log(err))
    }, [sunday, datesOfWeek, loading])

    console.log("load",loading)


    const list = daysOfWeek.map((day, i) => {
        const yogaClasses = yogaClass.filter(a => a.day === day)

        return (
            <DayColumn
                key={day}
                date={datesOfWeek[i]}
                yogaClasses={yogaClasses}
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

function getSundayOfCurrentWeek() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    return new Date(currentDate.getTime() - dayOfWeek * 24 * 3600 * 1000);
}

function getDatesOfWeek(sunday) {
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(sunday.getTime() + i * 24 * 3600 * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const fullDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
        dates.push(fullDate);
    }
    return dates;
}


