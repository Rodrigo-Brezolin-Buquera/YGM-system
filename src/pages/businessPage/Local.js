import { useState, useEffect, memo } from 'react'
import { Line, MainContainer, TextContainer, WrapContainer } from "../../theme";
import { Text, Heading, CircularProgress } from "@chakra-ui/react";
import { DoubleClickText } from "../../components/DoubleClickText";
import { RequestInput } from '../../components/RequestInput';
import { DeleteIcon } from "@chakra-ui/icons";
import TextCard from './TextCard';
import { deleteItemById, findAllItems, findItemById } from '../../api';
import { businessCol, stylesCol, teachersCol } from '../../api/config';

export const Local = () => {
    const [business, setBusiness] = useState([]);
    const [styles, setStyles] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findItemById(businessCol, "main")
            .then(res => setBusiness(res))
            .catch(err => console.log(err));

        findAllItems(stylesCol)
            .then(res => setStyles(res))
            .catch(err => console.log(err));

        findAllItems(teachersCol)
            .then(res => setTeachers(res))
            .catch(err => console.log(err));
    }, [loading]);

    const onDelete = (itemCol, id, name) => {
        if (window.confirm(`Remover ${name} da lista?`)) {
            deleteItemById(itemCol, id)
                .then(setLoading(!loading))
                .catch(err => console.log(err));
        }
    }

    const list = (state, itemCol) => state?.length && state.map(item => (
        <TextCard
            width={"120px"}
            key={item.id}
        >
            <Text>{item.name} </Text>

            <DeleteIcon _hover={{ cursor: "pointer" }} onClick={() => onDelete(itemCol, item.id, item.name)} />
        </TextCard>))


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
            <Heading alignSelf={"center"} size={"md"}>Professores</Heading>

            <RequestInput
                itemCol={teachersCol}
                setLoading={setLoading}
                loading={loading}
                placeholder={"Adicione uma pessoa instrutora"}
            />
            <WrapContainer>
                {teachers?.length ? list(teachers, teachersCol) : null}
            </WrapContainer>
            <Heading alignSelf={"center"} size={"md"}>Estilos</Heading>

            <RequestInput
                itemCol={stylesCol}
                setLoading={setLoading}
                placeholder={"Adicione um estilo de aula"}
            />

            <WrapContainer>
                {styles?.length ? list(styles, stylesCol) : null}
            </WrapContainer>

        </MainContainer>
    )
}



