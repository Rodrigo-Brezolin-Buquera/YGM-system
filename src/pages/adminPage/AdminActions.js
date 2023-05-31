import { useDisclosure, Button, Text } from "@chakra-ui/react";
import {  WrapContainer } from "../../theme";
import { CreateClassModal } from "./CreateClassModal";
import StudentList from "./StudentList";



export const AdminActions = ({navigate}) => {
    const { isOpen: isClassOpen, onOpen: onClassOpen, onClose: onClassClose } = useDisclosure()
    return (
        <>
            <WrapContainer>
              
                <Button
                    backgroundColor={"brand.200"}
                    onClick={onClassOpen}
                >
                    <Text> Nova Aula</Text>
                </Button>
            </WrapContainer>
            <StudentList navigate={navigate} />

            <CreateClassModal isOpen={isClassOpen} onClose={onClassClose} />

        </>
    )
}

