import { CircularProgress } from "@chakra-ui/react";
import React, { useLayoutEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/headerAdmin/HeaderAdmin";
import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import ClassInfo from "./components/classInfo/ClassInfo";
import DeleteClassButtons from "./components/deleteClassButtons/DeleteClassButtons";
import StudentList from "./components/studentList/StudentList";
import { MainContainer, SideContainer, CenterContainer } from "./styled";

const ViewClassPage = () => {
    useProtectedPageAdmin();
    const history = useHistory();
    const { classId } = useParams();
    const [yogaClass, getYogaClass] = useRequestData({}, `/calendar/${classId}`);
    const [checkins, getCheckins] = useRequestData([], `/booking/yogaClass/${classId}`);
    const [loading, setLoading] = useState(false);

    useLayoutEffect(() => {
        getYogaClass();
        getCheckins();
    }, [loading]);

    return (
        <div>
            <Header history={history} />
            <MainContainer>
                <CenterContainer>
                    {yogaClass.id ? <ClassInfo
                        key={yogaClass.id}
                        id={yogaClass.id}
                        day={yogaClass.day}
                        time={yogaClass.time}
                        date={yogaClass.date}
                        teacher={yogaClass.teacher}
                        name={yogaClass.name}
                    /> :
                        <CircularProgress isIndeterminate color="yellow.400" size="70px" />
                    }

                    <DeleteClassButtons
                        id={yogaClass.id}
                        groupId={yogaClass.groupId}
                        history={history}
                    />
                </CenterContainer>
                <SideContainer>
                    <StudentList
                        checkins={checkins}
                        loading={loading}
                        setLoading={setLoading}
                    />
                </SideContainer>
            </MainContainer>
        </div>
    );
};

export default ViewClassPage;
