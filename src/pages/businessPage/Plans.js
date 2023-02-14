import { useState, useEffect } from 'react'
import { MainContainer, TextContainer, WrapContainer } from "../../theme";
import { Text, Heading } from "@chakra-ui/react";

export const Plans = () => {
    const [plas, setPlans] = useState([]);
    useEffect(() => {
        //buscar espaço
    }, []);

    return (
        <MainContainer>
            <Heading size={"md"}>Planos</Heading>
            <TextContainer>Add plano</TextContainer>
            <WrapContainer>
                Planos
            </WrapContainer>
        </MainContainer>
    )
}

