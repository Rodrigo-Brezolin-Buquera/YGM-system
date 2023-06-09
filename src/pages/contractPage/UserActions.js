import { Button, CircularProgress, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findItemById } from "../../api";
import { contractsCol, usersCol } from "../../api/config";
import { deleteContract } from "../../api/contracts";
import UserInfo from "../../components/UserInfo";
import { goToAdmin } from "../../routes/coordinator";
import { WrapContainer, confirmDialog } from "../../theme";
import { AddContractModal } from "./AddContractModal";
import { EditContractModal } from "./EditContractModal"

export const UserActions = ({ userId, navigate }) => {
    const [contracts, setContracts] = useState({});
    const [user, setUser] = useState({})
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()

    const onDelete = () => {
        confirmDialog("Excluir contrato?", () => {
            deleteContract(userId)
                .then(setTimeout(() => { goToAdmin(navigate) }, 500))
                .catch(err => console.log(err.message))
        })
    };

    useEffect(() => {
        findItemById(contractsCol, userId)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))
        findItemById(usersCol, userId)
            .then(res => setUser(res))
            .catch(err => console.log(err.message))

    }, [userId, isAddOpen, isEditOpen]);

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
                        plan={contracts.plan}
                        planStarted={contracts.started}
                        planEnds={contracts.ends}
                        availableClasses={contracts.availableClasses}
                    /> :
                    <Text> Ainda não contrato para este usuário</Text>
                // <CircularProgress isIndeterminate color="brand.200" size="70px" />
            }

            <AddContractModal
                isOpen={isAddOpen}
                onClose={onAddClose}
                name={user?.name}
                id={userId}
                userIsActive={contracts?.name}

            />

            <EditContractModal
                contract={contracts}
                name={contracts?.name}
                isOpen={isEditOpen}
                onClose={onEditClose}
                id={userId}
            />
        </>
    );
};

