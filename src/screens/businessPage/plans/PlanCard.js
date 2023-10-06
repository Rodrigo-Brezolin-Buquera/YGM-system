import { DeleteIcon } from "@chakra-ui/icons";
import { Text, Box, Card } from "@chakra-ui/react";
import { memo } from "react"
import { DoubleClickText } from "../../../components/DoubleClickText";

const PlanCard = ({ plan, deletePlan }) => {
    const price = plan.monthlyPayment

    return (
        <Card
            minW={"180px"}
            minH={"2em"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            backgroundColor={"brand.200"}
            padding={"1em"}
            borderRadius={"20px"}
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
        </Card>
    )
}

export default memo(PlanCard)