import { CircularProgress } from "@chakra-ui/react";
import { useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { SideContainer, MainContainer, Background } from "../../theme";
import { Booking } from "./booking/Booking";
import { ClassActions } from "./classActions/ClassActions";
import ClassDetails from "./classDetails/ClassDetails";
import { StudentList } from "./studentList/StudentList";

const ClassPage = ({id}) => {
    useProtectedPage("admin")
    const { data:yogaClass, loading } = useRequestData(`/calendar/${id}`, id)
    const [reload, setReload] = useState(false)

    return (
        <>
            <HeaderAdmin />
            <Background  >
                <SideContainer>
                    <StudentList
                        classId={id}
                        reload={reload}
                        setReload={setReload}
                    />
                </SideContainer>
                <MainContainer>
                    {
                        loading
                            ?
                            <CircularProgress isIndeterminate color="brand.200" size="120px" />
                            :
                            <>
                                <ClassActions id={id} groupId={yogaClass.groupId} />
                                <Booking yogaClass={yogaClass} setReload={setReload} />
                                <ClassDetails key={yogaClass.id} yogaClass={yogaClass} />
                            </>
                    }
                </MainContainer>
            </Background>
        </>
    );
};

export default ClassPage;
