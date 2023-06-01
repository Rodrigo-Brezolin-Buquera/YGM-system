import { CircularProgress, Button, Text } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById } from "../../api";
import { logout, resetPassword } from "../../api/auth";
import { contractsCol, usersCol, } from "../../api/config";
import { CheckinsDone } from "../../components/CheckinsDone";
import UserInfo from "../../components/UserInfo";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MainContainer, SideContainer, Header, Background, WrapContainer, confirmDialog } from "../../theme";
import AvailableClasses from "./AvailableClasses";

const UserPage = () => {
    useProtectedPage("user")
    const { userId } = useParams();
    const navigate = useNavigate()
    const [contract, setContract] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findItemById(contractsCol, userId)
            .then(res => setContract(res))
            .catch(err => console.log(err.message))
        findItemById(usersCol, userId)
            .then(res => setUser(res))
            .catch(err => console.log(err.message))
    }, [userId, loading]);

    const changePassword = useCallback(() => {
        confirmDialog("Enviar email de redefinição de senha?", ()=> resetPassword(user?.email)) 
    },[user])

    return (
        <>
            <Header>
                <Button
                    onClick={() => logout(navigate)}
                >
                    Sair
                </Button>
            </Header>
            <Background
                column={"column"}
                justifyContent={"start"}
            >
                {
                    user.active ? <>
                        <SideContainer>
                            <AvailableClasses
                                contractId={contract?.id}
                                userName={contract?.name}
                                contractLimit={contract?.currentContract?.availableClasses}
                                loading={loading}
                                setLoading={setLoading}
                            />
                        </SideContainer>

                        <MainContainer>

                            {
                                contract?.id ?
                                    <UserInfo
                                        id={contract?.id}
                                        name={contract?.name}
                                        plan={contract?.currentContract?.plan}
                                        planStarted={contract?.currentContract?.started}
                                        planEnds={contract?.currentContract?.ends}
                                        availableClasses={contract?.currentContract?.availableClasses}
                                    /> :
                                    <CircularProgress isIndeterminate color={"brand.200"} size="70px" />
                            }

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
                                userId={userId}
                                loading={loading}
                            />
                        </SideContainer>
                    </>
                        :
                        <MainContainer>
                            <Text>Sua conta ainda não foi ativada, tente novamente mais tarde.</Text>
                        </MainContainer>
                }
            </Background>
        </>
    );
};

export default UserPage;
