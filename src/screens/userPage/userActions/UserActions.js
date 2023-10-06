import { Button, Text } from "@chakra-ui/react";
import { CheckinsDone } from "../../../components/CheckinsDone";
import AvailableClasses from "../availableClasses/AvailableClasses";
import {  useUserActionsLogic } from "./useUserActionsLogic";
import {ContractDetails} from "../../../components/ContractDetails"

export const UserActions = ({ contract }) => {
    const {view, handleView} = useUserActionsLogic()

    const CurrectView = () => {
        if (view === "actions") {
            return (
                <>
                    <ContractDetails contract={contract} admin={false} />
                    <CheckinsDone userId={contract.id} />             
                </>
            )
        } else {
            return (
                <AvailableClasses
                    contractId={contract.id}
                    name={contract.name}
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
                    {view === "classes" ? "Dados conta" : "Agendamento"}
                </Text>
            </Button>

            <CurrectView />
        </>
    )
}

