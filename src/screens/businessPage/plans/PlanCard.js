import { memo } from 'react'
import { DeleteIcon } from "@chakra-ui/icons";
import { Text, Box } from "@chakra-ui/react";
import { DoubleClickText } from "../../../components/DoubleClickText";
import { TextCard } from "../../../theme";

const PlanCard = ({plan, deletePlan}) => {
    const price = plan.monthlyPayment

    return (
        <TextCard
            width={"180px"}
            key={plan.id}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"0.1em"}
                marginLeft={"0.5em"}
            >
                <Text fontWeight={"bold"}>{plan.id}</Text>
                <DoubleClickText
                    path={`/plans/${plan.id}`}
                    atribute={"price"}
                    text={price}
                    size={"10"}
                />
            </Box>

            <DeleteIcon
                _hover={{ cursor: "pointer" }}
                boxSize={"22px"}
                onClick={() => deletePlan(plan.id)}
            />
        </TextCard>
    )
}

export default memo(PlanCard)