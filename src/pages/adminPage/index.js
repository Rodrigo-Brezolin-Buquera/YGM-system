import {  useDisclosure, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findItemWhere, findAllItems } from "../../api";
import { contractsCol, calendarCol } from "../../api/config";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getToday } from "../../utils/dates";
import { Background, WrapContainer,MainContainer, SideContainer } from "../../theme";
import AvailableClasses from "./AvailableClasses";
import { CreateClassModal } from "./CreateClassModal";
import { CreateContractModal } from "./CreateContractModal";
import StudentList from "./StudentList";

const AdminPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();
    const [contracts, setContracts] = useState([]);
    const [yogaClasses, setyogaClasses] = useState([]);
    const { isOpen: isContractOpen, onOpen: onContractOpen, onClose: onContractClose } = useDisclosure()
    const { isOpen: isClassOpen, onOpen: onClassOpen, onClose: onClassClose } = useDisclosure()

    useEffect(() => {
        findAllItems(contractsCol)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))
        setContracts()
        findItemWhere(calendarCol, "date", getToday())
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
    }, [isContractOpen, isClassOpen]);

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Background
            
            >
                <MainContainer>
                    <WrapContainer>
                        <Button
                            backgroundColor={"brand.200"}
                            onClick={onContractOpen}
                        >
                            <Text>Novo usuário</Text>
                        </Button>

                        <Button
                            backgroundColor={"brand.200"}
                            onClick={onClassOpen}
                        >
                            <Text> Nova Aula</Text>
                        </Button>
                    </WrapContainer>
                    <StudentList contracts={contracts} navigate={navigate} />
                </MainContainer>

                <SideContainer>
                    <AvailableClasses yogaClasses={yogaClasses} navigate={navigate} />
                </SideContainer>
            </Background>

            <CreateContractModal isOpen={isContractOpen} onClose={onContractClose} />
            <CreateClassModal isOpen={isClassOpen} onClose={onClassClose} />

        </>
    );
};

export default AdminPage;
