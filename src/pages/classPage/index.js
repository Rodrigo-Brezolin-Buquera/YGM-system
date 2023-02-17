import { CircularProgress,  Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItemById, deleteItemWhere, findItemById, findItemWhere } from "../../api";
import { checkinsCol, calendarCol } from "../../api/config";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToAdmin } from "../../routes/coordinator";
import { SideContainer, WrapContainer, LoadingButton, MainContainer, Background } from "../../theme";
import  ClassInfo  from "./ClassInfo";
import { StudentList } from "./StudentList";

const ClassPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();
    const { classId } = useParams();
    const [yogaClass, setYogaClass] = useState({});
    const [checkins, setCheckins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findItemById(calendarCol, classId)
            .then(res => setYogaClass(res))
            .catch(err => console.log(err.message))
        findItemWhere(checkinsCol, "yogaClassId", classId)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
    }, [loading, classId]);

    const deleteClass = useCallback( async() => {
        if (window.confirm("Deletar aula?")) {
            setLoading(true);
            await deleteItemById(calendarCol, classId)
                .then(goToAdmin(navigate))
                .catch(err => console.log(err.message))
                .finally(setLoading(false))
        }
    }, [navigate, classId])

    const deleteClasses = useCallback( async() => {
        if (window.confirm("Deletar todas as aulas nesse horário?")) {
            setLoading(true)
            await deleteItemWhere(calendarCol, "groupId", yogaClass.groupId)
                .then(goToAdmin(navigate))
                .catch(err => console.log(err.message))
                .finally(setLoading(false))
        }
    }, [navigate, yogaClass.groupId])

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
                        id={yogaClass.id}
                        day={yogaClass.day}
                        time={yogaClass.time}
                        date={yogaClass.date}
                        teacher={yogaClass.teacher}
                        name={yogaClass.name}
                        capacity={yogaClass.capacity}

                    /> :
                        <CircularProgress isIndeterminate color="yellow.400" size="70px" />
                    }

                </MainContainer>
                <SideContainer>
                    <StudentList
                        checkins={checkins}
                        capacity={yogaClass?.capacity}
                        loading={loading}
                        setLoading={setLoading}
                    />
                </SideContainer>
            </Background>
        </>
    );
};

export default ClassPage;
