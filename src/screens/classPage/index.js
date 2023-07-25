import { CircularProgress, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteItemById, deleteItemWhere, findItemById } from "../../api";
import { calendarCol } from "../../api/config";
import { Booking } from "../../components/Booking";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToAdmin } from "../../routes/coordinator";
import { SideContainer, WrapContainer, LoadingButton, MainContainer, Background, confirmDialog, toastAlert } from "../../theme";
import ClassInfo from "./ClassInfo";
import { StudentList } from "./StudentList";

const ClassPage = () => {
    useProtectedPage("admin")
    const router = useRouter()
    const { id } = router.query
    const [yogaClass, setYogaClass] = useState({});
    const [loading, setLoading] = useState(false)
    const toast = useToast()


    useEffect(() => {
        findItemById(calendarCol, id)
            .then(res => setYogaClass(res))
            .catch(err => console.log(err.message))
    }, [id, loading]);

    const deleteClass = () => {
        confirmDialog("Deletar aula?", () => {
            deleteItemById(calendarCol, id)
                .then(setTimeout(() => { goToAdmin(router) }, 500))
                .catch(err => toastAlert(toast, err.message, "error"))
        })
    }

    const deleteClasses = () => {
        confirmDialog("Deletar todas as aulas nesse horário?", () => {
            deleteItemWhere(calendarCol, "groupId", yogaClass.groupId)
                .then(setTimeout(() => { goToAdmin(router) }, 500))
                .catch(err => toastAlert(toast, err.message, "error"))
        })
    }

    return (
        <>
            <HeaderAdmin />
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

                    {
                        yogaClass.id ?
                            <ClassInfo key={yogaClass.id} yogaClass={yogaClass} />
                            :
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
