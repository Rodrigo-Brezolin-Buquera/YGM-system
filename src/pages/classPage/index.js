import { CircularProgress,  Text } from "@chakra-ui/react";
import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItemById, deleteItemWhere, findItemById } from "../../api";
import {  calendarCol } from "../../api/config";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToAdmin } from "../../routes/coordinator";
import { SideContainer, WrapContainer, LoadingButton, MainContainer, Background } from "../../theme";
import  {ClassInfo}  from "./ClassInfo";
import { StudentList } from "./StudentList";

const ClassPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();
    const { classId } = useParams();
    const [yogaClass, setYogaClass] = useState({});
  
    useEffect(() => {
        findItemById(calendarCol, classId)
            .then(res => setYogaClass(res))
            .catch(err => console.log(err.message))
    }, [ classId]);

    const deleteClass =  async() => {
        if (window.confirm("Deletar aula?")) {
            await deleteItemById(calendarCol, classId)
                .then( setTimeout(()=>{goToAdmin(navigate)}, 500) )
                .catch(err => console.log(err.message))
                
        }
    }

    const deleteClasses = async() => {
        if (window.confirm("Deletar todas as aulas nesse horário?")) {
            await deleteItemWhere(calendarCol, "groupId", yogaClass.groupId)
                .then(setTimeout(()=>{goToAdmin(navigate)}, 500))
                .catch(err => console.log(err.message))
        }
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
                        <CircularProgress isIndeterminate color="yellow.400" size="70px" />
                    }

                </MainContainer>
                <SideContainer>
                    <StudentList
                        capacity={yogaClass?.capacity}
                        classId={classId}
                    />
                </SideContainer>
            </Background>
        </>
    );
};

export default ClassPage;
