import { Box, CircularProgress } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findItemById, findItemWhere } from "../../api";
import { checkinsCol, contractsCol, yogaClassesCol } from "../../api/config";
import CheckinsDone from "../../components/CheckinsDone";
import ClosedPlansInfo from "../../components/ClosedPlansInfo";
import Header from "../../components/Header"
import { getToday } from "../../services/moment";
import { colors } from "../../theme/colors";
import { SideContainer } from "../../theme/SideContainer";
// import { useProtectedPageStudent } from "../../hooks/useProtectedPageStudent";
import AvailableClasses from "./AvailableClasses";
import UserInfo from "../../components/UserInfo";

const UserPage = () => {
    // useProtectedPageStudent();
    const { userId } = useParams();
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
            .catch(err => console.log("aulas",err.message))
        findItemWhere(checkinsCol, "contractId", userId) 
            .then(res => setCheckins(res))
            .catch(err => console.log("checks",err.message))
    }, [loading, userId]);

    return (
        <>
            <Header />
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
