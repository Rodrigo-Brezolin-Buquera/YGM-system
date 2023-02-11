import {  Button, useDisclosure} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { findAllItems } from "../../api";
import { yogaClassesCol } from "../../api/config";
import  HeaderAdmin  from "../../components/HeaderAdmin"
import { formatToCalendar } from "../../services/moment";
import { colors } from "../../theme/colors";
import { ButtonContainer } from "../../theme/ButtonContainer";

import Calendar from "./Calendar";
import { CreateClassModal } from "./CreateClassModal";

const CalendarPage = () => {
    // useProtectedPageAdmin();
    const navigate = useNavigate();
    const [yogaClasses, setyogaClasses] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        findAllItems(yogaClassesCol)
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
    }, []);

    const calendarClasses = yogaClasses.length && yogaClasses.map((yogaClass) => {
        const result = {
            id: yogaClass.id,
            groupId: yogaClass.groupId,
            title: `${yogaClass.name} ${yogaClass.time}`,
            date: formatToCalendar(yogaClass.date),
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            description: yogaClass.teacher
        };
        return result;
    });

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <ButtonContainer          >
                <Button  onClick={onOpen} backgroundColor={colors.secondary}>
                    Adicionar aula
                </Button>
            </ButtonContainer>
            <Calendar
                navigate={navigate}
                calendarClasses={calendarClasses}
            />

            <CreateClassModal isOpen={isOpen} onClose={onClose}/>
        </>
    );
};

export default CalendarPage;