import { useState, useEffect } from 'react'
import { Line, MainContainer, TextContainer, WrapContainer } from "../../theme";
import { Text, Heading, Card } from "@chakra-ui/react";
import { DoubleClickText } from "../../components/DoubleClickText";
import { RequestInput } from '../../components/RequestInput';
import { DeleteIcon } from "@chakra-ui/icons";


export const Local = () => {
    const [space, setSpace] = useState([]);

    useEffect(() => {
        //buscar espaço
    }, []);

    const mockSpace = {
        local: "testers",
        maxCapacity: 8,
        phone: "11-1111-1111",
        email: "anpch@example.com",
        site: "www.test.com",
        styles: ["test", "test2"],
        teachers: ["Rodrigo", "Louize"]
    }

    const onDelete = (item, atribute ) => { 
        const filteredList = mockSpace[atribute].filter( i => i !== item );
        //request
    }

    const list = (atribute) => mockSpace[atribute]?.map(item => (
        <Card
            minW={"120"}
            minH={"2em"}
            key={item}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            backgroundColor={"brand.200"}
            padding={"1em"}
            borderRadius={"20px"}
        >
            <Text>{item}</Text>

            <DeleteIcon onClick={()=>onDelete(item, atribute)} /> 
        </Card>))


    return (
        <MainContainer>
            <Heading size={"md"}>Espaço</Heading>
            <TextContainer>
                <Line>
                    <Text > Endereço:</Text>
                    <DoubleClickText text={mockSpace.local} />
                </Line>
                <Line>
                    <Text > Capacidade:</Text>
                    <DoubleClickText text={Number(mockSpace.maxCapacity)} />
                </Line>
            </TextContainer>
            <Heading alignSelf={"center"} size={"md"}>Contato</Heading>
            <TextContainer>
                <Line>
                    <Text > Telefone:</Text>
                    <DoubleClickText text={mockSpace.phone} />
                </Line>

                <Line>
                    <Text > Email:</Text>
                    <DoubleClickText text={mockSpace.email} />
                </Line>

                <Line>
                    <Text > Site:</Text>
                    <DoubleClickText text={mockSpace.site} />
                </Line>


            </TextContainer>
            <Heading alignSelf={"center"} size={"md"}>Professores</Heading>

            <RequestInput placeholder={"Adicione uma pessoa instrutora"} />
            <WrapContainer> {list("teachers")}</WrapContainer>
            <Heading alignSelf={"center"} size={"md"}>Estilos</Heading>

            <RequestInput placeholder={"Adicione um estilo de aula"} />

            <WrapContainer> {list("styles")}</WrapContainer>

        </MainContainer>
    )
}

