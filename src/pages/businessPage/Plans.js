import { useState, useEffect } from 'react'
import { MainContainer, WrapContainer } from "../../theme";
import { Text, Heading, Box,  } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { TextCard } from './TextCard';
import { deleteItemById } from '../../api';
import { plansCol } from '../../api/config';
import { PlanForm } from './PlanForm';
import { DoubleClickText } from '../../components/DoubleClickText';


export const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //buscar espaço
    }, []);

    const mockPlans = [
        { id: "1x-Mensal", monthlyPayment: "R$ 100,00" },
        { id: "2x-Mensal", monthlyPayment: "R$ 100,00" },
        { id: "3x-Mensal", monthlyPayment: "R$ 100,00" },
        { id: "4x-Mensal", monthlyPayment: "R$ 100,00" },
        { id: "5x-Mensal", monthlyPayment: "R$ 100,00" },
        { id: "6x-Mensal", monthlyPayment: "R$ 100,00" }
    ]

    const onDelete = (id) => {
        setLoading(true)

        deleteItemById(plansCol, id)
            .catch(err => console.log(err))
            .finally(setLoading(false))

    }

    const list = mockPlans.map(plan => {
        return (
            <TextCard
                width={"150px"}
                key={plan.id}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    gap={"0.1em"}
                    marginLeft={"0.5em"}
                >
                    <Text>{plan.id}</Text>
                    <DoubleClickText text={plan.monthlyPayment} size={"10"} />
                </Box>

                <DeleteIcon
                    boxSize={"20px"}
                    onClick={() => onDelete(plan.id)}
                />
            </TextCard>
        )
    })


    return (
        <MainContainer>
            <Heading size={"md"}>Planos</Heading>
            <PlanForm />
            <br />
            <WrapContainer>
                {list}
            </WrapContainer>
        </MainContainer>
    )
}

