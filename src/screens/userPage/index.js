import { CircularProgress, Button, Text, Box } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { findItemById } from "../../api";
import { logout, resetPassword } from "../../api/auth";
import { contractsCol, usersCol, } from "../../api/config";
import { CheckinsDone } from "../../components/CheckinsDone";
import ContractDetails from "../../components/ContractDetails";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MainContainer, SideContainer, Header, Background, WrapContainer, confirmDialog } from "../../theme";
import AvailableClasses from "./AvailableClasses";

const UserPage = () => {
    useProtectedPage("user")
    const router = useRouter()
    const { id } = router.query
    const [contract, setContract] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        findItemById(contractsCol, id)
            .then(res => setContract(res))
            .catch(err => console.log(err.message))
        findItemById(usersCol, id)
            .then(res => {
                setUser(res)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
    }, [id, loading]);

    const changePassword = useCallback(() => {
        confirmDialog("Enviar email de redefinição de senha?", () => resetPassword(user?.email))
    }, [user])


    if (loading) {
        return (
            <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <CircularProgress
                    isIndeterminate
                    color={"brand.200"}
                    size="120px"
                    mt={"1em"}
                />
            </Box>
        )
    }

    return (
        <>
            <Header>
                <Button onClick={() => logout(router)} >
                    Sair
                </Button>
            </Header>
            <Background column={"column"} justifyContent={"start"}>
                {
                    user.active ?
                        <>
                            <SideContainer>
                                <AvailableClasses
                                    contractId={contract?.id}
                                    userName={contract?.name}
                                    contractLimit={contract?.availableClasses}
                                />
                            </SideContainer>

                            <MainContainer>
                                <ContractDetails contract={contract} />
                                <WrapContainer>
                                    <Button
                                        backgroundColor={"brand.200"}
                                        onClick={changePassword}
                                    >
                                        <Text> Redefinir senha</Text>
                                    </Button>
                                </WrapContainer>
                            </MainContainer>

                            <SideContainer>
                                <CheckinsDone
                                    userId={id}
                                    loading={loading}
                                />
                            </SideContainer>
                        </>
                        :
                        <MainContainer>
                            <Text textAlign={"center"}
                            >Sua conta ainda não foi ativada, entre em contato conosco para ativar.
                            </Text>
                        </MainContainer>
                }
            </Background>
        </>
    );
};

export default UserPage;
