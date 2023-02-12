import React from "react";
import "@fullcalendar/react/dist/vdom.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { goToClass } from "../../routes/coordinator";

export default class Calendar extends React.Component {

    render() {
        const { navigate, calendarClasses } = this.props;

        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                eventClick={function (info) {
                    goToClass(navigate, info.event.id);
                }}
                events={calendarClasses}
            />
        );
    }
}