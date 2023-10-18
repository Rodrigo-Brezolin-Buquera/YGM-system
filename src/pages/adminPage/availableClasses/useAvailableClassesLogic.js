import { useRequestData } from "../../../hooks/useRequestData";
import { getNextNDays, sortByDayAndTime } from "../../../utils/dates";

export const useAvailableClassesLogic = () => {
    const nextDays = JSON.stringify(getNextNDays(5))
    const { data, loading } = useRequestData(`/calendar?dates=${nextDays}`)
    const yogaClasses = sortByDayAndTime(data) 

    return { yogaClasses, loading }
}

