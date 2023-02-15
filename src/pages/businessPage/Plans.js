import { useState, useEffect } from 'react'
import { MainContainer, WrapContainer } from "../../theme";
import { Text, Heading, Box, } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import TextCard from './TextCard';
import { deleteItemById, findAllItems } from '../../api';
import { plansCol } from '../../api/config';
import { PlanForm } from './PlanForm';
import { DoubleClickText } from '../../components/DoubleClickText';


export const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findAllItems(plansCol)
            .then(res => setPlans(res))
            .catch(err => console.log(err))
    }, []);

    const onDelete = (id) => {
        if (window.confirm("Deletar este plano?")) {
            setLoading(true)
            deleteItemById(plansCol, id)
                .catch(err => console.log(err))
                .finally(setLoading(false))
        }
    }

    const list = plans?.length && plans.map(plan => {
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
                    <DoubleClickText text={plan.price} size={"10"} />
                </Box>

                <DeleteIcon
                    boxSize={"22px"}
                    onClick={() => onDelete(plan.id)}
                />
            </TextCard>
        )
    })


    return (
        <MainContainer>
            <Heading size={"md"}>Planos</Heading>
            <PlanForm loading={loading} setLoading={setLoading} />
            <br />
            <WrapContainer>
                {list}
            </WrapContainer>
        </MainContainer>
    )
}

