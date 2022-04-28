import React, { useLayoutEffect, useState, useContext } from 'react'
import Header from '../../compononents/headerAdmin/HeaderAdmin'
import { useHistory, useParams } from "react-router-dom";
import { MainContainer, SideContainer, CenterContainer } from './styled';
import StudentCheckinCard from '../../compononents/studentCheckinCard/StudentCheckinCard';
import { Typography } from '@material-ui/core';
import ClassInfo from '../../compononents/classInfo/ClassInfo';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import moment from 'moment';
import { GlobalStateContext } from '../../global/GlobalStateContext'

const ViewClassPage = () => {
    useProtectedPageAdmin()
    const { setters, states } = useContext(GlobalStateContext)
    const [yogaClass, setYogaClass] = useState({})
    const [checkins, setCheckins] = useState([])
    const history = useHistory()
    const params = useParams()

    useLayoutEffect(() => {
        // findClassById(params.classId, setYogaClass)
        // findCheckinByClassId(params.classId, setCheckins)
    }, [states.newRender])


    const studentList = checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.classId + checkin.planId}
                classId={checkin.classId}
                planId={checkin.planId}
                verified={checkin.verified}
            />
        )
    })

    return (
        <div>
            <Header history={history} />
            <MainContainer>
                <CenterContainer>
                    <ClassInfo
                        key={yogaClass.id}
                        id={yogaClass.id}
                        day={yogaClass.day}
                        time={yogaClass.time}
                        date={moment(yogaClass.date).format("DD/MM/YY")}
                        teacher={yogaClass.teacher}
                        name={yogaClass.name}

                    />
                </CenterContainer>
                <SideContainer>
                    <Typography variant="h6" > Lista de checkins: </Typography>
                    {checkins.length ? studentList : <p> Não há check-ins até o momento </p>}

                </SideContainer>

            </MainContainer>
        </div>
    )
}

export default ViewClassPage
