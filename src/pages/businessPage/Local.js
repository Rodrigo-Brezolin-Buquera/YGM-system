import { useState, useEffect } from 'react'
import { Line, MainContainer, TextContainer, WrapContainer } from "../../theme";
import { Text, Heading } from "@chakra-ui/react";
import { DoubleClickText } from "../../components/DoubleClickText";
import { RequestInput } from '../../components/RequestInput';
import { DeleteIcon } from "@chakra-ui/icons";
import TextCard  from './TextCard';


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
        if (window.confirm(`Remover ${item} da lista?`)) { 
        const filteredList = mockSpace[atribute].filter( i => i !== item );
        // request
        }
    }

    const list = (atribute) => mockSpace[atribute]?.map(item => (
        <TextCard
            width={"120px"}
            key={item}        
        >
            <Text>{item}</Text>

            <DeleteIcon onClick={()=>onDelete(item, atribute)} /> 
        </TextCard>))


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

