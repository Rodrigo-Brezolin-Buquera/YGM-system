import { Button, Text } from "@chakra-ui/react";
import { CheckinsDone } from "../../../components/CheckinsDone";
import ContractDetails from "../../../components/ContractDetails";
import {  SideContainer } from "../../../theme";
import AvailableClasses from "../availableClasses/AvailableClasses";
import {  useUserActionsLogic } from "./useUserActionsLogic";

export const UserActions = ({ contract }) => {
    const {view, handleView, renderContract} = useUserActionsLogic()

  
    const CurrectView = () => {
        if (view === "actions") {
            return (
                <>
                    {/* <ContractDetails contract={contract} admin={false} /> */}
                    <SideContainer>
                        <CheckinsDone userId={contract.id} />
                    </SideContainer>
                </>
            )
        } else {
            return (
                <AvailableClasses
                    contractId={contract.id}
                    name={contract.name}
                    contractLimit={contract.availableClasses}
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

            {
            //   <ContractDetails contract={renderContract} admin={false} />

            }

            <CurrectView />
        </>
    )
}

