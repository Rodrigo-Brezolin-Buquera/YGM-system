import { Box, Button, CircularProgress, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findItemById, findItemsLimit } from "../../api";
import { resetPassword } from "../../api/auth";
import { checkinsCol, contractsCol, usersCol } from "../../api/config";
import { deleteContract } from "../../api/contracts";
import CheckinsDone from "../../components/CheckinsDone";
import Header from "../../components/HeaderAdmin";
import UserInfo from "../../components/UserInfo";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToAdmin } from "../../routes/coordinator";
import { ButtonContainer, LoadingButton, SideContainer, MainContainer } from "../../theme";
import { AddContractModal } from "./AddContractModal";
import { EditContractModal } from "./EditContractModal"

const ContractPage = () => {
    useProtectedPage("admin")
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
        findItemsLimit(checkinsCol, 5)
            .then(res => setCheckins(res))
            .catch(err => console.log(err.message))

    }, [userId]);


    const onDelete = () => {
        try {
            if (window.confirm("Excluir este contrato?")) {
                deleteContract(userId)
                    .then(goToAdmin(navigate))
                    .catch(err => console.log(err.message))
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const sendPasswordLink = () => {
        if (window.confirm("Enviar email de redefinição de senha?")) {
            findItemById(usersCol, userId)
                .then(user => resetPassword(user.email))
                .catch(err => console.log(err.message))
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
                backgroundColor={"brand.100"}
                flexDirection={["column-reverse", "row", "row"]}
                justifyContent={["flex-end", "start", "start"]}
            >
                <SideContainer>
                    <CheckinsDone checkins={checkins} />
                </SideContainer>
                <MainContainer          >

                    <ButtonContainer>
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
                            handler={onDelete}
                        >
                            <Text>Excluir contrato</Text>
                        </LoadingButton>

                        <LoadingButton
                            color={"brand.200"}
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


                </MainContainer>
            </Box>

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
