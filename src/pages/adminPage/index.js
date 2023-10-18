import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer, SideContainer, WrapContainer } from "../../theme";
import AvailableClasses from "./availableClasses/AvailableClasses";
import ContractList from "./contractList/ContractList";
import UserList from "./userList/UserList";
import { useNavigate } from "react-router-dom";


const AdminPage = () => {
    useProtectedPage("admin")
    const [view, setView] = useState(null)   
    const router = useNavigate();

    const ListView = () => {
        switch (view) {
        case "users":
            return <UserList  router={router} />
        case "contracts":
            return <ContractList router={router} />
        default:
            return null
        }
    }

    return (
        <>
            <HeaderAdmin />
            <Background >
                <MainContainer>
                    <WrapContainer>
                        <Button
                            backgroundColor={"brand.200"}
                            onClick={() => setView("users")}
                            w={"180px"}
                        >
                            <Text>Ativar contas</Text>
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
                </MainContainer>

                <SideContainer>
                    <AvailableClasses  router={router} />
                </SideContainer>
            </Background>
        </>
    );
};

export default AdminPage;
