import {Box, Button, CircularProgress, Text, useDisclosure} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItemById, findItemById, findItemWhere } from "../../api";
import { checkinsCol, contractsCol } from "../../api/config";
import CheckinsDone from "../../components/CheckinsDone";
import Header from "../../components/HeaderAdmin";
import UserInfo from "../../components/UserInfo";
import { goToAdmin } from "../../routes/coordinator";
import { ButtonContainer } from "../../theme/ButtonContainer";
import { LoadingButton } from "../../theme/LoadingButton";
import { SideContainer } from "../../theme/SideContainer";
import { colors } from "../../theme/colors";
import {AddContractModal} from "./AddContractModal";
import {EditContractModal} from "./EditContractModal"

const ContractPage = () => {
    // useProtectedPageAdmin();
    const { userId } = useParams();
    const [contracts, setContracts] = useState({});
    const [checkins, setCheckins] = useState([]);
    const navigate = useNavigate();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()


    useEffect(() => {
        findItemById(contractsCol, userId)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))
        findItemWhere (checkinsCol, "contractId", userId)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))
        
    }, [userId]);


    const deleteContract = async () => {
        try {
            if(window.confirm("Excluir este contrato?")) {
                await deleteItemById(contractsCol, userId);
                goToAdmin(navigate);
            }  
        } catch (err) {
            console.log(err.message);
        }   
    };

    const sendPasswordLink = async () => {
        if (window.confirm("Enviar email com link para gerar nova senha?")) {
            
            // await changePassword(id);
         
        }
    };

   
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

                    <ButtonContainer>
                        <Button
                            backgroundColor={colors.secondary}
                            onClick={onEditOpen}
                        >
                            <Text>Editar Contrato</Text> 
                        </Button>

                        <Button
                            backgroundColor={colors.secondary}
                            onClick={onAddOpen}
                        >
                            <Text> Novo Plano</Text>
                        </Button>

                        <LoadingButton
                            color={colors.secondary}
                            handler={deleteContract}
                        >
                            <Text>Excluir contrato</Text>
                        </LoadingButton>

                        <LoadingButton
                            color={colors.secondary}
                            handler={sendPasswordLink}
                        >
                            <Text>Enviar nova senha</Text>
                        </LoadingButton>
                       
                    </ButtonContainer>

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

                   
                </Box>
            </Box>

            <AddContractModal
                isOpen={isAddOpen} 
                onClose={onAddClose} 
                id={userId} 

            />

            <EditContractModal  
                contract ={contracts?.currentContract}
                name={contracts?.name}
                isOpen={isEditOpen} 
                onClose={onEditClose} 
                id={userId} 
            />        
        </>
    );
};

export default ContractPage;
