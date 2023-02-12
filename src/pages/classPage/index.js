import { CircularProgress, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/headerAdmin/HeaderAdmin";
import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import ClassInfo from "./ClassInfo";
import DeleteClassButtons from "./components/deleteClassButtons/DeleteClassButtons";
import StudentList from "./components/studentList/StudentList";
import { SideContainer } from "../../theme/SideContainer";
import { findItemById, findItemWhere } from "../../api";
import { checkinsCol, yogaClassesCol } from "../../api/config";

const ClassPage = () => {
    // useProtectedPageAdmin();
    const history = useHistory();
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
       
    }, [loading]);

    return (
        <>
            <Header history={history} />
            <Box 
              display={"flex"} 
              flexDirection={["column-reverse","row" ,"row"]} 
              justifyContent={["flex-end" ,"space-between","space-between"]}
              width={"100%"}
              minW={"100vh"} 
            >
                <Box
                display={"flex"} 
                flexDirection={"column"}
                justifyContent={"top"}
                alignItems={"center"}
                paddingTop={"1em"}
                width={"100%"}
                >
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
