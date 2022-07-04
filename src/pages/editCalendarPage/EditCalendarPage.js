import React, { useLayoutEffect } from 'react'
import Calendar from './components/calendar/Calendar'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { LowerContainer, LinearContainer } from './styled';
import CreateClassForm from './components/createClassForm/CreateClassForm';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { useRequestData } from '../../hooks/useRequestData';
import moment from 'moment';

const EditCalendarPage = () => {
    // useProtectedPageAdmin()
    const history = useHistory()
    const [yogaClasses, getyogaClasses] = useRequestData([], "/calendar")
  
    
    useLayoutEffect(() => {
        getyogaClasses()
    }, [])

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
        }
        return result
    })

    return (
        <div>
            <Header history={history} />

            <Calendar
                history={history}
                calendarClasses={calendarClasses}
            />

            <LowerContainer>
                <LinearContainer>
                    <CreateClassForm  />
                </LinearContainer>
            </LowerContainer>
        </div>
    )
}

export default EditCalendarPage
