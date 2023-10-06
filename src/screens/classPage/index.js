import { useRouter } from "next/router";
import { useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {useRequestData} from "../../hooks/useRequestData"
import { SideContainer,  MainContainer, Background } from "../../theme";
import { Booking } from "./booking/Booking";
import { ClassActions } from "./classActions/ClassActions";
import ClassDetails from "./classDetails/ClassDetails";
import { StudentList } from "./studentList/StudentList";

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
