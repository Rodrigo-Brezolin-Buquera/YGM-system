import { Text, Heading, CircularProgress } from "@chakra-ui/react";
import { useState, useEffect } from "react"
import { findItemById } from "../../api";
import { businessCol } from "../../api/config";
import { DoubleClickText } from "../../components/DoubleClickText";
import { Line, MainContainer, TextContainer } from "../../theme";

export const Local = () => {
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        findItemById(businessCol, "main")
            .then(res => setBusiness(res))
            .catch(err => console.log(err.message));

    }, []);

 
    return (
        <MainContainer>
            <Heading size={"md"}>Espaço</Heading>


            {business ? <TextContainer>
                <Line>
                    <Text > Endereço:</Text>
                    <DoubleClickText text={business.address} atribute={"address"} itemCol={businessCol} id={"main"} />
                </Line>
                <Line>
                    <Text > Capacidade:</Text>
                    <DoubleClickText text={business.maxCapacity} atribute={"maxCapacity"} itemCol={businessCol} id={"main"} />
                </Line>
            </TextContainer>
                : <CircularProgress />
            }
            <Heading alignSelf={"center"} size={"md"}>Contato</Heading>
            <TextContainer>
                <Line>
                    <Text > Telefone: </Text>
                    <DoubleClickText text={business.phone} atribute={"phone"} itemCol={businessCol} id={"main"} />
                </Line>

                <Line>
                    <Text > Email:</Text>
                    <DoubleClickText text={business.email} atribute={"email"} itemCol={businessCol} id={"main"} />
                </Line>

                <Line>
                    <Text > Site:</Text>
                    <DoubleClickText text={business.website} atribute={"website"} itemCol={businessCol} id={"main"} />
                </Line>

                <Line>
                    <Text > Facebook:</Text>
                    <DoubleClickText text={business.facebook} atribute={"facebook"} itemCol={businessCol} id={"main"} />
                </Line>

                <Line>
                    <Text > Instagram:</Text>
                    <DoubleClickText text={business.instagram} atribute={"instagram"} itemCol={businessCol} id={"main"} />
                </Line>


            </TextContainer>
            
        </MainContainer>
    )
}



