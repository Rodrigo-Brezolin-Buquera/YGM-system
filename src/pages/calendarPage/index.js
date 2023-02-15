import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findAllItems } from "../../api";
import { calendarCol } from "../../api/config";
import HeaderAdmin from "../../components/HeaderAdmin"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { formatToCalendar } from "../../services/moment";
import { Background, MainContainer } from "../../theme";

import Calendar from "./Calendar";
import { WeekCalendar } from "./WeekCalendar";

const CalendarPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();
    const [yogaClasses, setyogaClasses] = useState([]);


    const mockClasses = [
        { date: "15/02/2023" },
        { date: "16/02/2023" },
        { date: "17/02/2023" },
        { date: "17/02/2023" },
        { date: "19/02/2023" },
        { date: "21/02/2023" },
        { date: "21/02/2023" },
    ]


    useEffect(() => {
        // findAllItems(calendarCol)
        //     .then(res => setyogaClasses(res))
        //     .catch(err => console.log(err.message))
    }, []);

    // const calendarClasses = yogaClasses.length && yogaClasses.map((yogaClass) => {
    //     const result = {
    //         id: yogaClass.id,
    //         groupId: yogaClass.groupId,
    //         title: `${yogaClass.name} ${yogaClass.time}`,
    //         date: formatToCalendar(yogaClass.date),
    //         backgroundColor: "",
    //         borderColor: "",
    //         textColor: "",
    //         description: yogaClass.teacher
    //     };
    //     return result;
    // });

    return (
        <>
            <HeaderAdmin navigate={navigate} />

            {/* <Calendar
                navigate={navigate}
                calendarClasses={calendarClasses}
            /> */}

            <Background>
                <MainContainer>
                    <WeekCalendar yogaClasses={mockClasses} />
                </MainContainer>

            </Background>


        </>
    );
};

export default CalendarPage;