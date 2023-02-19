import {  Heading, } from "@chakra-ui/react";
import { useState, useEffect } from "react"
import { deleteItemById, findAllItems, } from "../../api";
import { stylesCol, teachersCol } from "../../api/config";
import { RequestInput } from "../../components/RequestInput";
import { confirmDialog, WrapContainer } from "../../theme";
import ItemCard from "./ItemCard";

export const TeachersAndStyles = () => {
    const [styles, setStyles] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        findAllItems(stylesCol)
            .then(res => setStyles(res))
            .catch(err => console.log(err.message));

        findAllItems(teachersCol)
            .then(res => setTeachers(res))
            .catch(err => console.log(err.message));
    }, [loading]);


    const onDelete = (itemCol, id, name) => {
        confirmDialog(`Remover ${name} da lista?`, () => {
            deleteItemById(itemCol, id)
                .then(setLoading(!loading))
                .catch(err => console.log(err.message));
        })
    }

    const list = (state, itemCol) => state?.length ? state.map(item => {
        return (
            <ItemCard
                key={item.id}
                item={item}
                itemCol={itemCol}
                onDelete={onDelete}
            />
        )
    }
    ) : null


    return (
        <>
            <Heading alignSelf={"center"} size={"md"}>Professores</Heading>

            <RequestInput
                itemCol={teachersCol}
                setLoading={setLoading}
                placeholder={"Adicione uma pessoa"}
            />
            <WrapContainer>
                {list(teachers, teachersCol)}
            </WrapContainer>
            <Heading alignSelf={"center"} size={"md"}>Estilos</Heading>

            <RequestInput
                itemCol={stylesCol}
                setLoading={setLoading}
                placeholder={"Adicione um estilo "}
            />

            <WrapContainer>
                {list(styles, stylesCol)}

            </WrapContainer>

        </>
    )
}


