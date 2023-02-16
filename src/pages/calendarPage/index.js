import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import { Booking } from "../../components/Booking";
import { WeekCalendar } from "./WeekCalendar";

const CalendarPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate()
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(false)

    // não está funcionando
    useEffect(() => {}, [loading])

    return (
        <>
            <HeaderAdmin navigate={navigate} />

            <Background>

                <MainContainer>
                    <WeekCalendar navigate={navigate} setSelected={setSelected} />
                    <Booking selected={selected} loading={loading} setLoading={setLoading} />


                </MainContainer>
            </Background>
        </>
    );
};

export default CalendarPage;