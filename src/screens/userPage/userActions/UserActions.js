import { Button, Text } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { findItemById } from "../../../api";
import { resetPassword } from "../../../api/auth";
import { contractsCol } from "../../../api/config";
import { CheckinsDone } from "../../../components/CheckinsDone";
import confirmDialog from "../../../components/confirmDialog";
import ContractDetails from "../../../components/ContractDetails";
import { MainContainer, SideContainer, WrapContainer } from "../../../theme";
import AvailableClasses from "../availableClasses/AvailableClasses";
import { useUserActions, useUserActionsLogic } from "./useUserActionsLogic";

export const UserActions = ({ id, contract }) => {
    const {view, handleView} = useUserActionsLogic()
    
    const CurrectView = () => {
        if (view === "actions") {
            return (
                <>
                    {/* <ContractDetails contract={contract} /> */}
                    <SideContainer>
                        <CheckinsDone userId={id} />
                    </SideContainer>
                </>
            )
        } else {
            return (
                <AvailableClasses
                    contractId={contract?.id}
                    name={contract?.name}
                    contractLimit={contract?.availableClasses}
                />
            )
        }
    }

    return (
        <>
            <Button
                backgroundColor={"brand.200"}
                onClick={handleView}
            >
                <Text fontWeight={"bold"}>
                    {view === "classes" ? "Dados pessoais" : "Aulas disponíveis"}
                </Text>
            </Button>
            <CurrectView />
        </>
    )
}

