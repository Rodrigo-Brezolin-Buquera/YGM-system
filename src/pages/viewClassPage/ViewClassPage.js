import React, { useLayoutEffect } from 'react'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory, useParams } from "react-router-dom";
import { MainContainer, SideContainer, CenterContainer } from './styled';
import ClassInfo from './components/classInfo/ClassInfo';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { useRequestData } from "../../hooks/useRequestData"
import StudentList from './components/studentList/StudentList';
import DeleteClassButtons from './components/deleteClassButtons/DeleteClassButtons';

const ViewClassPage = () => {
    // useProtectedPageAdmin()
    const history = useHistory()
    const params = useParams()
    const [yogaClass, getYogaClass] = useRequestData({}, `/calendar/${params.classId}`)

    useLayoutEffect(() => {
        getYogaClass()
    }, [])

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
                    <StudentList checkins={yogaClass.checkins} />
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default ViewClassPage
