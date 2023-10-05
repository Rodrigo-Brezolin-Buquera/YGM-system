import { useDisclosure, Button, Text } from "@chakra-ui/react";
import HeaderAdmin from "../../components/HeaderAdmin"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import { Agenda } from "./agenda/Agenda";
import { CreateClassModal } from "./createClassModal/CreateClassModal";

const CalendarPage = () => {
    useProtectedPage("admin")
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <HeaderAdmin />

            <Background>
                <MainContainer>
                    <Button
                        backgroundColor={"brand.200"}
                        onClick={onOpen}
                    >
                        <Text fontSize={"larger"} fontWeight={"bold"}>
                            Nova Aula
                        </Text>
                    </Button>

                    <Agenda />
                </MainContainer>
            </Background>

            <CreateClassModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default CalendarPage;