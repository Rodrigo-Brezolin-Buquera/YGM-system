import { CircularProgress, Button, Text, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById } from "../../api";
import { logout, resetPassword } from "../../api/auth";
import { contractsCol, usersCol, } from "../../api/config";
import { CheckinsDone } from "../../components/CheckinsDone";
import UserInfo from "../../components/UserInfo";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MainContainer, SideContainer, Header, Background, WrapContainer } from "../../theme";
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

    const changePassword = async () => await resetPassword(user?.email)
    
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
                            <WrapContainer>
                                <Button
                                    backgroundColor={"brand.200"}
                                    onClick={changePassword}
                                >
                                    <Text> Redefinir senha</Text>
                                </Button>
                            </WrapContainer>

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
