import React, { useLayoutEffect, useState } from 'react'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory, useParams } from "react-router-dom";
import { MainContainer, SideContainer, CenterContainer } from './styled';
import ClassInfo from './components/classInfo/ClassInfo';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { useRequestData } from "../../hooks/useRequestData"
import StudentList from './components/studentList/StudentList';
import DeleteClassButtons from './components/deleteClassButtons/DeleteClassButtons';

const ViewClassPage = () => {
    useProtectedPageAdmin()
    const history = useHistory()
    const {classId} = useParams()
    const [yogaClass, getYogaClass] = useRequestData({}, `/calendar/${classId}`)
    const [loading, setLoading] = useState(false)

    useLayoutEffect(() => {
        getYogaClass()
    }, [loading])

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
                        date={yogaClass.date}
                        teacher={yogaClass.teacher}
                        name={yogaClass.name}
                    />
                    <DeleteClassButtons
                        id={yogaClass.id} 
                        groupId={yogaClass.groupId} 
                        history={history}
                    />
                </CenterContainer>
                <SideContainer>
                    <StudentList 
                    checkins={yogaClass.checkins} 
                    loading={loading} 
                    setLoading={setLoading}
                    />
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default ViewClassPage
