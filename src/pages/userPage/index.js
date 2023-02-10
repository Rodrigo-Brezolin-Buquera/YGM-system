import { Box, CircularProgress, Button } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById, findItemWhere } from "../../api";
import { checkinsCol, contractsCol, yogaClassesCol } from "../../api/config";
import CheckinsDone from "../../components/CheckinsDone";
import ClosedPlansInfo from "../../components/ClosedPlansInfo";
import Header from "../../theme/Header"
import UserInfo from "../../components/UserInfo";
import { getToday } from "../../services/moment";
import { SideContainer } from "../../theme/SideContainer";
import { colors } from "../../theme/colors";
// import { useProtectedPageStudent } from "../../hooks/useProtectedPageStudent";
import AvailableClasses from "./AvailableClasses";
import { logout } from "../../api/auth";

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
            <Box
                display={"flex"}
                flexDirection={["column", "row", "row"]}
                minH={"100vh"}
                backgroundColor={colors.lightNeutral}
            >

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
                            <CircularProgress isIndeterminate color={colors.secondary} size="70px" />
                    }
                    <ClosedPlansInfo
                        closedContracts={contract.closedContracts}
                    />
                </Box>

                <SideContainer>
                    {<CheckinsDone checkins={checkins} />}
                </SideContainer>
            </Box>
        </>
    );
};

export default UserPage;
