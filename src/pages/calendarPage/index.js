import moment from "moment";
import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/headerAdmin/HeaderAdmin";
import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import Calendar from "./components/calendar/Calendar";
import CreateClassForm from "./components/createClassForm/CreateClassForm";
import { LowerContainer, LinearContainer } from "./styled";

const CalendarPage = () => {
    useProtectedPageAdmin();
    const history = useHistory();
    const [yogaClasses, getyogaClasses] = useRequestData([], "/calendar");
    const [loading, setLoading] = useState(false);
  
    
    useLayoutEffect(() => {
        getyogaClasses();
    }, [loading]);

    const calendarClasses = yogaClasses.length && yogaClasses.map((yogaClass) => {
        const result = {
            id: yogaClass.id,
            groupId: yogaClass.groupId,
            title: `${yogaClass.name} ${yogaClass.time}`,
            date: moment(yogaClass.date, "DD/MM/YYYY").format("YYYY-MM-DD"),
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            description: yogaClass.teacher
        };
        return result;
    });

    return (
        <div>
            <Header history={history} />

            <Calendar
                history={history}
                calendarClasses={calendarClasses}
            />

            <LowerContainer>
                <LinearContainer>
                    <CreateClassForm loading={loading} setLoading={setLoading} />
                </LinearContainer>
            </LowerContainer>
        </div>
    );
};

export default CalendarPage;