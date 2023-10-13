import { useRequestData } from "../../../hooks/useRequestData";
import { getNextNDays, sortByDayAndTime } from "../../../utils/dates";

export const useAvailableClassesLogic = (id) => {
    const nextDays = JSON.stringify(getNextNDays(3))
    const { data, loading } = useRequestData(`/calendar?dates=${nextDays}`, id)
    const yogaClasses = sortByDayAndTime(data) 

    return { yogaClasses, loading }
}

