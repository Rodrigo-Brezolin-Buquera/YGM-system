import { Box, useDisclosure, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findItemWhere, findAllItems } from "../../api";
import { contractsCol, calendarCol } from "../../api/config";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getToday } from "../../services/moment";
import { ButtonContainer,MainContainer, SideContainer } from "../../theme";
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
    }, []);

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Box
                display={"flex"}
                w={"100%"}
                h={"100%"}
                minH={"100vh"}
                backgroundColor={"brand.100"}
                flexDirection={["column-reverse", "row", "row"]}
                justifyContent={["flex-end", "start", "start"]}
            >
                <MainContainer>
                    <ButtonContainer>
                        <Button
                            backgroundColor={"brand.200"}
                            onClick={onContractOpen}
                        >
                            <Text>Novo contrato</Text>
                        </Button>

                        <Button
                            backgroundColor={"brand.200"}
                            onClick={onClassOpen}
                        >
                            <Text> Nova Aula</Text>
                        </Button>
                    </ButtonContainer>
                    <StudentList contracts={contracts} navigate={navigate} />
                </MainContainer>

                <SideContainer>
                    <AvailableClasses yogaClasses={yogaClasses} navigate={navigate} />
                </SideContainer>
            </Box>

            <CreateContractModal isOpen={isContractOpen} onClose={onContractClose} />
            <CreateClassModal isOpen={isClassOpen} onClose={onClassClose} />

        </>
    );
};

export default AdminPage;
