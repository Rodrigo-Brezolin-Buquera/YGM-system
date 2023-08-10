import { useDisclosure, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { WrapContainer } from "../../theme";
import { selectOptionsMapper } from "../../utils/selectOptionsMapper";
import ContractList from "./ContractList";
import { CreateClassModal } from "./CreateClassModal";
import UserList from "./UserList";

export const AdminActions = ({ classLimit, selectOptions }) => {
    const { isOpen: isClassOpen, onOpen: onClassOpen, onClose: onClassClose } = useDisclosure()
    const [view, setView] = useState(null)
    const {plansOptions, teachersOptions, stylesOptions } = selectOptions

    const ListView = () => {
        switch (view) {
            case "users":
                return <UserList />
            case "contracts":
                return <ContractList plansOptions={selectOptionsMapper(plansOptions, "id")} />
            default:
                return null
        }
    }

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
                    onClick={() => setView("users")}
                    w={"180px"}
                >
                    <Text>Visualizar Usuários</Text>
                </Button>
                <Button
                    backgroundColor={"brand.200"}
                    onClick={() => setView("contracts")}
                    w={"180px"}
                >
                    <Text> Visualizar Contratos </Text>
                </Button>
            </WrapContainer>

            <ListView />

            <CreateClassModal
                isOpen={isClassOpen}
                onClose={onClassClose}
                classLimit={classLimit}
                teacherOptions={selectOptionsMapper(teachersOptions, "name")}
                styleOptions={selectOptionsMapper(stylesOptions, "name")}
            />
        </>
    )
}

