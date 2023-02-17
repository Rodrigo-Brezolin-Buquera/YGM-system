import {  CircularProgress, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById } from "../../api";
import { logout } from "../../api/auth";
import { findCheckinsLimit } from "../../api/checkins";
import {  contractsCol,  } from "../../api/config";
import {CheckinsDone} from "../../components/CheckinsDone";
import UserInfo from "../../components/UserInfo";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MainContainer, SideContainer, Header, Background } from "../../theme";
import AvailableClasses from "./AvailableClasses";

const UserPage = () => {
    useProtectedPage("user")
    const { userId } = useParams();
    const navigate = useNavigate()
    const [contract, setContract] = useState({});
    const [checkins, setCheckins] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        findItemById(contractsCol, userId)
            .then(res => setContract(res))
            .catch(err => console.log(err.message))
    
        findCheckinsLimit(userId, 5)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
    }, [ userId, loading]);

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
                <SideContainer>
                    <AvailableClasses
                        contractId={contract.id}
                        userName={contract.name}
                        contractLimit={contract?.currentContract?.availableClasses}
                        checkins={checkins}      
                        loading={loading}
                        setLoading={setLoading}            
                    />
                </SideContainer>

                <MainContainer>
                    {
                        contract.id ?
                            <UserInfo
                                id={contract.id}
                                name={contract.name}
                                plan={contract?.currentContract?.plan}
                                planStarted={contract?.currentContract?.started}
                                planEnds={contract?.currentContract?.ends}
                                availableClasses={contract?.currentContract?.availableClasses}
                            /> :
                            <CircularProgress isIndeterminate color={"brand.200"} size="70px" />
                    }

                </MainContainer>

                <SideContainer>
                    {<CheckinsDone userId={userId} />}
                </SideContainer>

            </Background>
        </>
    );
};

export default UserPage;
