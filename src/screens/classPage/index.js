import { useRouter } from "next/router";
import { Booking } from "./booking/Booking";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { SideContainer,  MainContainer, Background } from "../../theme";
import ClassDetails from "./classDetails/ClassDetails";
import { StudentList } from "./studentList/StudentList";
import { ClassActions } from "./classActions/ClassActions";
import {useRequestData} from "../../hooks/useRequestData"
import { useState } from "react";

const ClassPage = () => {
    useProtectedPage("admin")
    const router = useRouter()
    const { id } = router.query
    const {data:yogaClass} = useRequestData(`/calendar/${id}`, id)
    const [reload, setReload] = useState(false)

    return (
        <>
            <HeaderAdmin />
            <Background  >
                <MainContainer>
                    <ClassActions id={id} groupId={yogaClass.groupId}/>
                   
                    <Booking
                        yogaClass={yogaClass}
                        setReload={setReload}
                    />

                    <ClassDetails key={yogaClass.id} yogaClass={yogaClass} />
                </MainContainer>
                <SideContainer>
                    <StudentList
                        classId={id}
                        reload={reload}
                        setReload={setReload}
                    />
                </SideContainer>
            </Background>
        </>
    );
};

export default ClassPage;
