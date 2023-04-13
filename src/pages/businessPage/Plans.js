import { DeleteIcon } from "@chakra-ui/icons";
import { Text, Heading, Box, } from "@chakra-ui/react";
import { useState, useEffect } from "react"
import { deleteItemById, findAllItems } from "../../api";
import { plansCol } from "../../api/config";
import { DoubleClickText } from "../../components/DoubleClickText";
import { confirmDialog, WrapContainer } from "../../theme";
import { TextCard } from "../../theme";
import { PlanForm } from "./PlanForm";

export const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const onDelete = (id) => {
        confirmDialog("Deletar plano?", () => {
            setLoading(!loading)
            deleteItemById(plansCol, id)
                .then()
                .catch(err => console.log(err.message))
                .finally(setLoading(!loading))
        })
    }

    useEffect(() => {
        findAllItems(plansCol)
            .then(res => setPlans(res))
            .catch(err => console.log(err.message))
    }, [loading]);

    const list = plans?.length ? plans.map(plan => {
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
                        itemCol={plansCol}
                        id={plan.id}
                        atribute={"price"}
                        text={plan.price} size={"10"}
                    />
                </Box>

                <DeleteIcon
                    _hover={{ cursor: "pointer" }}
                    boxSize={"22px"}
                    onClick={() => onDelete(plan.id)}
                />
            </TextCard>
        )
    }) : null


    return (
        <>
            <Heading size={"md"}>Planos</Heading>
            <PlanForm loading={loading} setLoading={setLoading} />
            <br />
            <WrapContainer>
                {list}
            </WrapContainer>
        </>
    )
}

