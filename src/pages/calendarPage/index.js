import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Booking } from "../../components/Booking";
import HeaderAdmin from "../../components/HeaderAdmin"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import  {WeekCalendar}  from "./WeekCalendar";


const CalendarPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate()
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(false)

    return (
        <>
            <HeaderAdmin navigate={navigate} />

            <Background>

                <MainContainer>
                    <WeekCalendar
                        navigate={navigate}
                        setSelected={setSelected}
                        loading={loading}
                    />
                    <Booking
                        setSelected={setSelected}
                        selected={selected}
                        setLoading={setLoading}
                    />
                </MainContainer>
            </Background>
        </>
    );
};

export default CalendarPage;