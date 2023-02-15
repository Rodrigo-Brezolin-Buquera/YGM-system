import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import { WeekCalendar } from "./WeekCalendar";

const CalendarPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate()
    const [selected, setSelected] = useState(null)


    return (
        <>
            <HeaderAdmin navigate={navigate} />

            <Background>
                <MainContainer>
                    <WeekCalendar navigate={navigate}  setSelected={setSelected}/>
                </MainContainer>
            </Background>
        </>
    );
};

export default CalendarPage;