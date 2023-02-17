import { useDisclosure, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, WrapContainer, MainContainer, SideContainer } from "../../theme";
import AvailableClasses from "./AvailableClasses";
import { CreateClassModal } from "./CreateClassModal";
import { CreateContractModal } from "./CreateContractModal";
import StudentList from "./StudentList";

const AdminPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();
    const { isOpen: isContractOpen, onOpen: onContractOpen, onClose: onContractClose } = useDisclosure()
    const { isOpen: isClassOpen, onOpen: onClassOpen, onClose: onClassClose } = useDisclosure()

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Background >
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
                    <StudentList  navigate={navigate} />
                </MainContainer>

                <SideContainer>
                    <AvailableClasses navigate={navigate} />
                </SideContainer>
            </Background>

            <CreateContractModal isOpen={isContractOpen} onClose={onContractClose} />
            <CreateClassModal isOpen={isClassOpen} onClose={onClassClose} />

        </>
    );
};

export default AdminPage;
