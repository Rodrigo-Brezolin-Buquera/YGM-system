import {Box, Button, CircularProgress, Text, useDisclosure} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById, findItemWhere } from "../../api";
import { checkinsCol, contractsCol } from "../../api/config";
import CheckinsDone from "../../components/CheckinsDone";
import Header from "../../components/HeaderAdmin";
import UserInfo from "../../components/UserInfo";
import { colors } from "../../theme/colors";
import { ButtonContainer } from "../../theme/ButtonContainer";
import { SideContainer } from "../../theme/SideContainer";
import AddContractModal from "./AddContractModal";

const ContractPage = () => {
    // useProtectedPageAdmin();
    const { userId } = useParams();
    const [contracts, setContracts] = useState({});
    const [checkins, setCheckins] = useState([]);
    const navigate = useNavigate();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()

    useEffect(() => {
        findItemById(contractsCol, userId)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))
        findItemWhere (checkinsCol, "contractId", userId)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
        
    }, [userId]);
   
    return (
        <>
            <Header navigate={navigate} />

            <Box
                display={"flex"}
                w={"100%"}
                h={"100%"}
                minH={"100vh"}
                backgroundColor={colors.lightNeutral}
                flexDirection={["column-reverse", "row", "row"]}
            >
                <SideContainer>
                    <CheckinsDone checkins={checkins}/>
                </SideContainer>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={"0.5em"}
                    minW={"300px"}
                >
                    {
                        contracts.id ?
                            <UserInfo
                                id={contracts.id}
                                name={contracts.name}
                                plan={contracts.currentContract.plan}
                                planStarted={contracts.currentContract.started}
                                planEnds={contracts.currentContract.ends}
                                availableClasses={contracts.currentContract.availableClasses}
                            /> :
                            <CircularProgress isIndeterminate color="yellow.400" size="70px" />  
                    }

                    <ButtonContainer>
                        <Button
                            backgroundColor={colors.secondary}
                            onClick={""}
                        >
                            Editar Contrato
                        </Button>

                        <Button
                            backgroundColor={colors.secondary}
                            onClick={onAddOpen}
                        >
                            <Text> Novo Plano</Text>
                        </Button>

                        // botao de deletar contrato
                        // botao de enviar nova ssenha?
                        // loadingButton generico
                    </ButtonContainer>
                </Box>
            </Box>

            <AddContractModal
                isAddOpen={isAddOpen} 
                onAddClose={onAddClose} 
                id={userId} 

            />

           // EditContractModal         
        </>
    );
};

export default ContractPage;
