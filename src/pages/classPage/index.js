import { CircularProgress, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import {ClassInfo} from "./ClassInfo";
import {StudentList} from "./StudentList";
import { SideContainer } from "../../theme/SideContainer";
import { deleteItemById, deleteItemWhere, findItemById, findItemWhere } from "../../api";
import { checkinsCol, yogaClassesCol } from "../../api/config";
import { ButtonContainer } from "../../theme/ButtonContainer";
import { LoadingButton } from "../../theme/LoadingButton";
import { colors } from "../../theme/colors";
import { goToAdmin } from "../../routes/coordinator";

const ClassPage = () => {
    // useProtectedPageAdmin();
    const navigate = useNavigate();
    const { classId } = useParams();
    const [yogaClass, setYogaClass] = useState({});
    const [checkins, setCheckins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findItemById(yogaClassesCol, classId)
            .then(res => setYogaClass(res))
            .catch(err => console.log(err.message))
        findItemWhere(checkinsCol, "classId", classId)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
    }, [loading, classId]);

    const deleteClass = () => {
        if (window.confirm("Deletar aula?")) {
            setLoading(true);
            deleteItemById(yogaClassesCol, classId)
                .then(goToAdmin(navigate))
                .catch(err => console.log(err.message))
                .finally(setLoading(false))
        }
    };

    const deleteClasses = () => {
        if (window.confirm("Deletar todas as aulas nesse horário?")) {
            setLoading(true)
            deleteItemWhere()
                .then(goToAdmin(navigate))
                .catch(err => console.log(err.message))
                .finally(setLoading(false))
        }
    };

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Box
                display={"flex"}
                flexDirection={["column-reverse", "row", "row"]}
                justifyContent={["flex-end", "space-between", "space-between"]}
                width={"100%"}
                minH={"100vh"}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"top"}
                    alignItems={"center"}
                    paddingTop={"1em"}
                    width={"100%"}
                >
                    <ButtonContainer>
                        <LoadingButton
                            color={colors.secondary}
                            handler={deleteClass}
                        >
                            <Text> Excluir aula</Text>
                        </LoadingButton>

                        <LoadingButton
                            color={colors.secondary}
                            handler={deleteClasses}
                        >
                            <Text> Excluir horário</Text>
                        </LoadingButton>

                    </ButtonContainer>

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
                </Box>
                <SideContainer>
                    <StudentList
                        checkins={checkins}
                        loading={loading}
                        setLoading={setLoading}
                    />
                </SideContainer>
            </Box>
        </>
    );
};

export default ClassPage;
