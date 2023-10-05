import {   useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import  {Agenda}  from "./agenda/Agenda";


const CalendarPage = () => {
    useProtectedPage("admin")
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(false)


//     const { isOpen: isClassOpen, onOpen: onClassOpen, onClose: onClassClose } = useDisclosure()
//     <Button
//     backgroundColor={"brand.200"}
//     onClick={onClassOpen}
// >
//     <Text> Nova Aula</Text>
// </Button>

// <CreateClassModal
// isOpen={isClassOpen}
// onClose={onClassClose}
// classLimit={classLimit}
// teacherOptions={selectOptionsMapper(teachersOptions, "name")}
// styleOptions={selectOptionsMapper(stylesOptions, "name")}
// />


    return (
        <>
            <HeaderAdmin  />

            <Background>

                <MainContainer>
                    <Agenda
                        setSelected={setSelected}
                        loading={loading}
                    />      
                </MainContainer>
            </Background>
        </>
    );
};

export default CalendarPage;