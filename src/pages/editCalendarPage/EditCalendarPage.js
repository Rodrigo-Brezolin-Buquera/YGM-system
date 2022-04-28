import React, { useLayoutEffect } from 'react'
import Calendar from '../../compononents/calendar/Calendar'
import Header from '../../compononents/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { LowerContainer, LineContainer, SideContainer } from './styled';
import AvailableClasses from "../../compononents/availableClasses/AvailableClasses"
import CreateClassForm from '../../compononents/createClassForm/CreateClassForm';
import DeleteClassForm from '../../compononents/deleteClassForm/DeleteClassForm';
import moment from "moment"
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';


const EditCalendarPage = () => {
    useProtectedPageAdmin()
    const history = useHistory()
   
    

    // const calendarClasses = states.classes.map((yogaClass) => {
    //     const result = {
    //         id: yogaClass.id,
    //         groupId: yogaClass.groupId,
    //         title: `${yogaClass.name} ${yogaClass.time}`,
    //         date: moment(yogaClass.date).format("YYYY-MM-DD"),
    //         backgroundColor: "",
    //         borderColor: "",
    //         textColor: "",
    //         description: yogaClass.teacher
    //     }
    //     return result
    // })

    useLayoutEffect(() => {

        // findAllClasses(setters.setClasses)

    }, [])
   
    return (
        <div>
            <Header history={history} />

            <Calendar
                history={history}
                // calendarClasses={calendarClasses}
            />

            <LowerContainer>
                <SideContainer>
                    <AvailableClasses />
                </SideContainer>

                <LineContainer>
                    <CreateClassForm  />
                    <DeleteClassForm  />
                </LineContainer>
            </LowerContainer>
        </div>
    )
}

export default EditCalendarPage
