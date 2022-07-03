
import React from 'react'
import "@fullcalendar/react/dist/vdom.js";
import FullCalendar  from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { goToViewClass } from '../../../../routes/coordinator'


export default class Calendar extends React.Component {
    

    render() {
       const { history, calendarClasses } = this.props

        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                eventClick={function (info) {
                    goToViewClass(history, info.event.id)
                }}
                events={calendarClasses}  

            />
        )
    }
}


