import { Box, CircularProgress, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById, findItemsLimit, findItemWhere } from "../../api";
import { logout } from "../../api/auth";
import { checkinsCol, contractsCol, yogaClassesCol } from "../../api/config";
import CheckinsDone from "../../components/CheckinsDone";
import UserInfo from "../../components/UserInfo";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getToday } from "../../services/moment";
import { MainContainer, SideContainer, Header } from "../../theme";
import AvailableClasses from "./AvailableClasses";

const UserPage = () => {
    useProtectedPage("user")
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
        findItemsLimit(checkinsCol, 5)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
    }, [loading, userId]);

    return (
        <>
            <Header>
                <Button
                    onClick={() => logout(navigate)}
                >
                    Sair
                </Button>
            </Header>
            <Box
                display={"flex"}
                w={"100%"}
                h={"100%"}
                minH={"100vh"}
                backgroundColor={"brand.100"}
                flexDirection={["column", "row", "row"]}
                justifyContent={["flex-end", "start", "start"]}
            >
                <SideContainer>
                    <AvailableClasses
                        yogaClasses={yogaClasses}
                        contractId={contract.id}
                        contractLimit={contract?.currentContract?.availableClasses}
                        checkins={checkins}
                        loading={loading}
                        setLoading={setLoading}
                    />
                </SideContainer>

                <MainContainer
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

                </MainContainer>

                <SideContainer>
                    {<CheckinsDone checkins={checkins} />}
                </SideContainer>

            </Box>
        </>
    );
};

export default UserPage;
