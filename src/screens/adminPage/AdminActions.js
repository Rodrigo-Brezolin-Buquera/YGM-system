import { useDisclosure, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { WrapContainer } from "../../theme";
import ContractList from "./ContractList";
import { CreateClassModal } from "./CreateClassModal";
import UserList from "./UserList";



export const AdminActions = () => {
    const { isOpen: isClassOpen, onOpen: onClassOpen, onClose: onClassClose } = useDisclosure()
    const [view, setView] = useState(true)

    const changeView = () => setView(!view)

    return (
        <>
            <WrapContainer>
                <Button
                    backgroundColor={"brand.200"}
                    onClick={onClassOpen}
                >
                    <Text> Nova Aula</Text>
                </Button>
                <Button
                    backgroundColor={"brand.200"}
                    onClick={changeView}
                    w={"180px"}
                >
                    <Text> {view ? "Visualizar Usuários" : "Visualizar Contratos"} </Text>
                </Button>
            </WrapContainer>
            {
                view ?
                    <ContractList  />
                    :
                    <UserList   />
            }


            <CreateClassModal isOpen={isClassOpen} onClose={onClassClose} />

        </>
    )
}

