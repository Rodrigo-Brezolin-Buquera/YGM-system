import { useCallback, useState } from "react";
import {useRequestData} from "../../../hooks/useRequestData"

export const useAgendaLogic = () => {
    const getSundayOfCurrentWeek = () => {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        return new Date(currentDate.getTime() - dayOfWeek * 24 * 3600 * 1000);
    }
    
    const getDatesOfWeek = (sunday) => {
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(sunday.getTime() + i * 24 * 3600 * 1000);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const fullDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
            dates.push(fullDate);
        }
        return dates;
    }

    const [sunday, setSunday] = useState((getSundayOfCurrentWeek()));
    const [datesOfWeek, setDatesOfWeek] = useState(getDatesOfWeek(sunday));
    const currentDays = JSON.stringify(datesOfWeek)

    const {data} = useRequestData(`/calendar?dates=${currentDays}`, sunday)
    
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
    
    return {yogaClasses: data,datesOfWeek, handleNextWeekClick, handlePreviousWeekClick }
}

