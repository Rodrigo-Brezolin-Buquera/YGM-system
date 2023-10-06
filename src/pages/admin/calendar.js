import { lazy } from "react";
import PageLoading from "../../components/PageLoading"

const CalendarPage = lazy(() => import("../../screens/calendarPage"))

export default function Calendar() {
    return (
 
        <PageLoading>
            <CalendarPage />
        </PageLoading>
    )
}
