import { useCallback, useState } from "react";
import {useRequestData} from "../../../hooks/useRequestData"
import { getDatesOfWeek, getSundayOfCurrentWeek } from "../../../utils/dates";

export const useAgendaLogic = () => {
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

