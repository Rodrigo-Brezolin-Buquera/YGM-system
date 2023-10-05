import { Button, CircularProgress, Text, useDisclosure } from "@chakra-ui/react";
import { ContractDetails } from "../../../components/ContractDetails";
import { LoadingButton, WrapContainer } from "../../../theme";
import { NewContractModal } from "./NewContractModal";
import { useRequestData } from "../../../hooks/useRequestData"
import { useDeleteItem } from "../../../hooks/useDeleteItem";

export const ContractActions = ({ userId, userName }) => {
    const { data: contract, loading } = useRequestData(`/contracts/${userId}`, userId)
    const { onDelete } = useDeleteItem(`/auth/${userId}`, "Excluir usuário?")
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    return (
        <>
            <WrapContainer>
                <Button
                    backgroundColor={"brand.200"}
                    onClick={onOpen}
                >
                    <Text> Novo Plano</Text>
                </Button>

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
                contract?.id ?
                    <ContractDetails contract={contract} />
                    :
                    <Text> Ainda não contrato para este usuário</Text>
            } 

            <NewContractModal
                isOpen={isOpen}
                onClose={onClose}
                name={userName || contract.name}
                id={userId}
            /> 
        </>
    );
};

