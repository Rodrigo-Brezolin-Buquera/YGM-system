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
                        position={"absolute"}
                        top={2}
                        right={2}
                        borderRadius={"50%"}
                        width={["40px", "40px"]} 
                        height={["40px", "40px"]}
                    >
                        <Text fontSize={["3xl","4xl"]} fontWeight={"bold"}   >
                            +
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