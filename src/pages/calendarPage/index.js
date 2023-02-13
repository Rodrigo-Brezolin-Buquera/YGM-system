import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findAllItems } from "../../api";
import { calendarCol } from "../../api/config";
import  HeaderAdmin  from "../../components/HeaderAdmin"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { formatToCalendar } from "../../services/moment";

import Calendar from "./Calendar";

const CalendarPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();
    const [yogaClasses, setyogaClasses] = useState([]);


    useEffect(() => {
        findAllItems(calendarCol)
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
    }, []);

    const calendarClasses = yogaClasses.length && yogaClasses.map((yogaClass) => {
        const result = {
            id: yogaClass.id,
            groupId: yogaClass.groupId,
            title: `${yogaClass.name} ${yogaClass.time}`,
            date: formatToCalendar(yogaClass.date),
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            description: yogaClass.teacher
        };
        return result;
    });

    return (
        <>
            <HeaderAdmin navigate={navigate} />
          
            <Calendar
                navigate={navigate}
                calendarClasses={calendarClasses}
            />

        </>
    );
};

export default CalendarPage;