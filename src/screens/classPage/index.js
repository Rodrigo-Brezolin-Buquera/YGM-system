
import { useRouter } from "next/router";
import { Booking } from "./booking/Booking";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { SideContainer,  MainContainer, Background } from "../../theme";
import ClassDetails from "./classDetails/ClassDetails";
import { StudentList } from "./studentList/StudentList";
import { ClassActions } from "./classActions/ClassActions";
import {useRequestData} from "../../hooks/useRequestData"

const ClassPage = () => {
    useProtectedPage("admin")
    const router = useRouter()
    const { id } = router.query
    const {data:yogaClass, loading, setLoading} = useRequestData(`/calendar/${id}`, id)

    return (
        <>
            <HeaderAdmin />
            <Background  >
                <MainContainer>
                    <ClassActions id={id} groupId={yogaClass.groupId}/>
                    <ClassDetails key={yogaClass.id} yogaClass={yogaClass} />
                   
                    <Booking
                        yogaClass={yogaClass}
                        loading={loading}
                        setLoading={setLoading}
                    />

                </MainContainer>
                <SideContainer>
                    <StudentList
                        classId={id}
                        loading={loading}
                        setLoading={setLoading}
                    />
                </SideContainer>
            </Background>
        </>
    );
};

export default ClassPage;
