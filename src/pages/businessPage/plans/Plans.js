import { Heading, CircularProgress, } from "@chakra-ui/react";
import { MainContainer, WrapContainer } from "../../../theme";
import PlanCard from "./PlanCard";
import { PlanForm } from "./PlanForm";
import { usePlansLogic } from "./usePlansLogic";

export const Plans = () => {
    const { plans, deletePlan, loading, formControls } = usePlansLogic()

    const renderList = () => {
        if (loading) {
            return <CircularProgress isIndeterminate color="brand.200" size="160px" />
        }

        const result = plans?.length ? plans.map(plan => {
            return (
                <PlanCard key={plan.id} plan={plan} deletePlan={deletePlan} />
            )
        }) : null
        return result
    }

    return (
        <MainContainer>
            <Heading size={"md"}>Planos</Heading>
            <PlanForm loading={loading} formControls={formControls} />
            <br />
            <WrapContainer>
                {renderList()}
            </WrapContainer>
        </MainContainer>
    )
}

