import { Button,  Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findItemById } from "../../api";
import { contractsCol, usersCol } from "../../api/config";
import { deleteContract } from "../../api/contracts";
import confirmDialog from "../../components/confirmDialog";
import ContractDetails from "../../components/ContractDetails";
import toastAlert from "../../components/toastAlert";
import { goToAdmin } from "../../routes/coordinator";
import { WrapContainer } from "../../theme";
import { selectOptionsMapper } from "../../utils/selectOptionsMapper";
import { AddContractModal } from "./AddContractModal";
import { EditContractModal } from "./EditContractModal"

export const UserActions = ({ userId, router, plansOptions }) => {
    const [contract, setContract] = useState({});
    const [user, setUser] = useState({})
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const toast = useToast()

    
    useEffect(() => {
        findItemById(contractsCol, userId)
        .then(res => setContract(res))
        .catch(err => console.log(err.message))
        findItemById(usersCol, userId)
        .then(res => setUser(res))
        .catch(err => console.log(err.message))
        
    }, [userId, isAddOpen, isEditOpen]);
    
    const onDelete = () => {
        confirmDialog("Excluir contrato?", () => {
            deleteContract(userId)
                .then(setTimeout(() => { goToAdmin(router) }, 500))
                .catch(err => toastAlert(toast, err.message, "error"))
        })
    };
    
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
                contract?.id ?
                    <ContractDetails contract={contract} /> 
                    :
                    <Text> Ainda não contrato para este usuário</Text>
            }

            <AddContractModal
                isOpen={isAddOpen}
                onClose={onAddClose}
                name={user?.name}
                id={userId}
                userIsActive={contract?.name}
                plansOptions={selectOptionsMapper(plansOptions, "id")}
            />

            <EditContractModal
                contract={contract}
                name={contract?.name}
                isOpen={isEditOpen}
                onClose={onEditClose}
                id={userId}
                plansOptions={selectOptionsMapper(plansOptions, "id")}
            />
        </>
    );
};

