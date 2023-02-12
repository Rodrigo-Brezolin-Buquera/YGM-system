import { Box, CircularProgress, Button } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById, findItemWhere } from "../../api";
import { logout } from "../../api/auth";
import { checkinsCol, contractsCol, yogaClassesCol } from "../../api/config";
import CheckinsDone from "../../components/CheckinsDone";
import UserInfo from "../../components/UserInfo";
import { getToday } from "../../services/moment";
import Header from "../../theme/Header"
import { MainContainer } from "../../theme/MainContainer";
import { SideContainer } from "../../theme/SideContainer";
// import { useProtectedPageStudent } from "../../hooks/useProtectedPageStudent";
import AvailableClasses from "./AvailableClasses";

const UserPage = () => {
    // useProtectedPageStudent();
    const { userId } = useParams();
    const navigate = useNavigate()
    const [contract, setContract] = useState({});
    const [yogaClasses, setyogaClasses] = useState([]);
    const [checkins, setCheckins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findItemById(contractsCol, userId) 
            .then(res => setContract(res))
            .catch(err => console.log(err.message))
        findItemWhere(yogaClassesCol, "date", getToday()) 
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
        findItemWhere(checkinsCol, "contractId", userId) 
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
    }, [loading, userId]);

    return (
        <>
            <Header>
                <Button
                    onClick={()=>logout(navigate)}
                >
                    Sair
                </Button>
            </Header>
           <MainContainer>

                <SideContainer>
                    <AvailableClasses
                        yogaClasses={yogaClasses}
                        contractId={contract.id}
                        checkins={checkins}
                        loading={loading}
                        setLoading={setLoading}
                    />
                </SideContainer>

                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={"100%"}
                    gap={"1em"}
                >
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
                   
                </Box>

                <SideContainer>
                    {<CheckinsDone checkins={checkins} />}
                </SideContainer>
            </MainContainer>
        </>
    );
};

export default UserPage;
