import { Button, CircularProgress, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById } from "../../api";
import { resetPassword } from "../../api/auth";
import { findCheckinsLimit } from "../../api/checkins";
import { contractsCol, usersCol } from "../../api/config";
import { changeStatus, deleteContract } from "../../api/contracts";
import CheckinsDone from "../../components/CheckinsDone";
import Header from "../../components/HeaderAdmin";
import UserInfo from "../../components/UserInfo";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToAdmin } from "../../routes/coordinator";
import { WrapContainer, Background, LoadingButton, SideContainer, MainContainer } from "../../theme";
import { AddContractModal } from "./AddContractModal";
import {EditContractModal} from "./EditContractModal"

const ContractPage = () => {
    useProtectedPage("admin")
    const { userId } = useParams();
    const [contracts, setContracts] = useState({});
    const [checkins, setCheckins] = useState([]);
    const [loading, setloading] = useState(false)
    const navigate = useNavigate();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()

    const onDelete = async () => {
        try {
            if (window.confirm("Excluir este contrato?")) {
                await deleteContract(userId)
                    .then(goToAdmin(navigate))
                    .catch(err => console.log(err.message))
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const sendPasswordLink = async () => {
        if (window.confirm("Enviar email de redefinição de senha?")) {
            await findItemById(usersCol, userId)
                .then(user => resetPassword(user.email))
                .catch(err => console.log(err.message))
        }
    }
    
    const onChangeStatus = async () => {
        if (window.confirm("Alterar status no plano?")) {
            await changeStatus(userId, !contracts?.currentContract?.active)
                .catch(err => console.log(err.message))
                .finally(setloading(!loading))
        }
    }

   
    useEffect(() => {
        findItemById(contractsCol, userId)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))
        findCheckinsLimit(userId, 5)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))

    }, [userId, loading, isAddOpen, isEditOpen]);

    return (
        <>
            <Header navigate={navigate} />

            <Background >
                <SideContainer>
                    <CheckinsDone checkins={checkins} />
                </SideContainer>
                <MainContainer >
                    <WrapContainer>
                        <Button
                            backgroundColor={"brand.200"}
                            onClick={onEditOpen}
                        >
                            <Text>Editar Contrato</Text>
                        </Button>

                        <Button
                            backgroundColor={"brand.200"}
                            onClick={onAddOpen}
                        >
                            <Text> Novo Plano</Text>
                        </Button>
                        <LoadingButton
                            color={"brand.200"}
                            handler={sendPasswordLink}
                        >
                            <Text>Nova senha</Text>
                        </LoadingButton>

                        <LoadingButton
                            color={!contracts?.currentContract?.active ? "brand.100" : "brand.200"}
                            handler={onChangeStatus}
                        >
                            <Text
                                color={!contracts?.currentContract?.active ? "brand.400" : "brand.300"}
                            >
                                {contracts?.currentContract?.active ? "Pausar contrato" : "Ativar contrato"}
                            </Text>
                        </LoadingButton>

                        <LoadingButton
                            color={"brand.300"}
                            handler={onDelete}
                        >
                            <Text color={"brand.400"}>
                                Excluir contrato
                            </Text>
                        </LoadingButton>
                    </WrapContainer>

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

                </MainContainer>
            </Background>

            <AddContractModal
                isOpen={isAddOpen}
                onClose={onAddClose}
                id={userId}

            />

            <EditContractModal
                contract={contracts?.currentContract}
                name={contracts?.name}
                isOpen={isEditOpen}
                onClose={onEditClose}
                id={userId}
            />
        </>
    );
};

export default ContractPage;
