import { CircularProgress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItemById, deleteItemWhere, findItemById } from "../../api";
import { calendarCol } from "../../api/config";
import { Booking } from "../../components/Booking";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToAdmin } from "../../routes/coordinator";
import { SideContainer, WrapContainer, LoadingButton, MainContainer, Background, confirmDialog } from "../../theme";
import { ClassInfo } from "./ClassInfo";
import { StudentList } from "./StudentList";

const ClassPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();
    const { classId } = useParams();
    const [yogaClass, setYogaClass] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        findItemById(calendarCol, classId)
            .then(res => setYogaClass(res))
            .catch(err => console.log(err.message))
    }, [classId, loading]);

    const deleteClass = () => {
        confirmDialog("Deletar aula?", () => {
            deleteItemById(calendarCol, classId)
                .then(setTimeout(() => { goToAdmin(navigate) }, 500))
                .catch(err => console.log(err.message))
        })
    }

    const deleteClasses = () => {
        confirmDialog("Deletar todas as aulas nesse horário?", () => {
            deleteItemWhere(calendarCol, "groupId", yogaClass.groupId)
                .then(setTimeout(() => { goToAdmin(navigate) }, 500))
                .catch(err => console.log(err.message))
        })
    }

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Background  >
                <MainContainer            >
                    <WrapContainer>
                        <LoadingButton
                            color={"brand.200"}
                            handler={deleteClass}
                        >
                            <Text> Excluir aula</Text>
                        </LoadingButton>

                        <LoadingButton
                            color={"brand.200"}
                            handler={deleteClasses}
                        >
                            <Text> Excluir horário</Text>
                        </LoadingButton>

                    </WrapContainer>

                    {yogaClass.id ? <ClassInfo
                        key={yogaClass.id}
                        day={yogaClass.day}
                        time={yogaClass.time}
                        date={yogaClass.date}
                        teacher={yogaClass.teacher}
                        name={yogaClass.name}
                    /> :
                        <CircularProgress isIndeterminate color="brand.200" size="70px" />
                    }
                    <Booking
                        setSelected={null}
                        selected={yogaClass}
                        setLoading={setLoading}
                    />

                </MainContainer>
                <SideContainer>
                    <StudentList
                        capacity={yogaClass?.capacity}
                        classId={classId}
                        loading={loading}
                        setLoading={setLoading}

                    />
                </SideContainer>
            </Background>
        </>
    );
};

export default ClassPage;
