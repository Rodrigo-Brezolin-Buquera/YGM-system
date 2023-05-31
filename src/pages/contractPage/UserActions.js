import { Button, CircularProgress, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findItemById } from "../../api";

import { contractsCol, usersCol } from "../../api/config";
import { changeStatus, deleteContract } from "../../api/contracts";
import UserInfo from "../../components/UserInfo";
import { goToAdmin } from "../../routes/coordinator";
import { WrapContainer, LoadingButton, confirmDialog } from "../../theme";
import { AddContractModal } from "./AddContractModal";
import { EditContractModal } from "./EditContractModal"

export const UserActions = ({ userId, navigate }) => {
    const [contracts, setContracts] = useState({});
    const [user, setUser] = useState({})
    const [loading, setloading] = useState(false)
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()

    const onDelete = () => {
        confirmDialog("Excluir contrato?", () => {
            deleteContract(userId)
                .then(setTimeout(() => { goToAdmin(navigate) }, 500))
                .catch(err => console.log(err.message))
        })
    };

    const onChangeStatus = async () => {
        await changeStatus(userId, !contracts?.currentContract?.active)
            .catch(err => console.log(err.message))
            .finally(setloading(!loading))
    }

    useEffect(() => {
        findItemById(contractsCol, userId)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))
        findItemById(usersCol, userId)
            .then(res => setUser(res))
            .catch(err => console.log(err.message))

    }, [userId, loading, isAddOpen, isEditOpen]);

    return (
        <>
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
                    color={!contracts?.currentContract?.active ? "brand.100" : "brand.200"}
                    handler={onChangeStatus}
                >
                    <Text
                        color={!contracts?.currentContract?.active ? "brand.400" : "brand.300"}
                    >
                        {contracts?.currentContract?.active ? "Pausar contrato" : "Ativar contrato"}
                    </Text>
                </LoadingButton>

                <Button
                    bg={"brand.300"}
                    onClick={onDelete}
                >
                    <Text color={"brand.400"}>
                        Excluir contrato
                    </Text>
                </Button>
            </WrapContainer>

            {
                contracts?.id ?
                    <UserInfo
                        id={contracts.id}
                        name={contracts.name}
                        plan={contracts.currentContract.plan}
                        planStarted={contracts.currentContract.started}
                        planEnds={contracts.currentContract.ends}
                        availableClasses={contracts.currentContract.availableClasses}
                    /> :
                    <Text> Ainda não contrato para este usuário</Text>
                // <CircularProgress isIndeterminate color="brand.200" size="70px" />
            }

            <AddContractModal
                isOpen={isAddOpen}
                onClose={onAddClose}
                name={user.name}
                id={userId}
                userIsActive={contracts?.name}

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

