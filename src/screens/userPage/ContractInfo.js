import {  Button, Text } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { findItemById } from "../../api";
import { resetPassword } from "../../api/auth";
import { contractsCol } from "../../api/config";
import { CheckinsDone } from "../../components/CheckinsDone";
import confirmDialog from "../../components/confirmDialog";
import ContractDetails from "../../components/ContractDetails";
import { MainContainer, SideContainer, WrapContainer } from "../../theme";
import AvailableClasses from "./AvailableClasses";

export const ContractInfo = ({ id, user }) => {
    const [contract, setContract] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        findItemById(contractsCol, id)
            .then(res => setContract(res))
            .catch(err => console.log(err.message))
    }, [id, loading]);

    const changePassword = useCallback(() => {
        confirmDialog("Enviar email de redefinição de senha?", () => resetPassword(user?.email))
    }, [user])

    return (
        <>
            <SideContainer>
                <AvailableClasses
                    contractId={contract?.id}
                    userName={contract?.name}
                    contractLimit={contract?.availableClasses}
                    setNewRender={setLoading}
                />
            </SideContainer>

            <MainContainer>
                <ContractDetails contract={contract} />
                <WrapContainer>
                    <Button
                        backgroundColor={"brand.200"}
                        onClick={changePassword}
                    >
                        <Text> Redefinir senha</Text>
                    </Button>
                </WrapContainer>
            </MainContainer>

            <SideContainer>
                <CheckinsDone
                    userId={id}
                    loading={loading}
                />
            </SideContainer>
        </>
    )
}

