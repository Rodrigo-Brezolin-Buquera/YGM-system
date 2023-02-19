import { useDisclosure, Button, Text } from "@chakra-ui/react";
import {  WrapContainer } from "../../theme";
import { CreateClassModal } from "./CreateClassModal";
import { CreateContractModal } from "./CreateContractModal";
import StudentList from "./StudentList";



export const AdminActions = ({navigate}) => {
    const { isOpen: isContractOpen, onOpen: onContractOpen, onClose: onContractClose } = useDisclosure()
    const { isOpen: isClassOpen, onOpen: onClassOpen, onClose: onClassClose } = useDisclosure()
    return (
        <>
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
            <StudentList navigate={navigate} />

            <CreateContractModal isOpen={isContractOpen} onClose={onContractClose} />
            <CreateClassModal isOpen={isClassOpen} onClose={onClassClose} />

        </>
    )
}

