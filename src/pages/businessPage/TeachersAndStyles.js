import { Heading, } from "@chakra-ui/react";
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

    const deleteItem = (itemCol, id) => {
        deleteItemById(itemCol, id)
            .then(setLoading(!loading))
            .catch(err => console.log(err.message));
    }

    const onDelete = (itemCol, id,) => {
        confirmDialog("Remover da lista?", ()=>deleteItem(itemCol, id))
    }

    const list = (state, itemCol) => state?.length && state.map(item => {
        return (
            <ItemCard
                key={item.id}
                item={item}
                itemCol={itemCol}
                onDelete={onDelete}
            />
        )
    }
    )


    return (
        <>
            <Heading alignSelf={"center"} size={"md"}>Professores</Heading>

            <RequestInput
                itemCol={teachersCol}
                setLoading={setLoading}
                placeholder={"Adicione uma pessoa"}
            />
            <WrapContainer>
                {teachers?.length ? list(teachers, teachersCol) : null}
            </WrapContainer>
            <Heading alignSelf={"center"} size={"md"}>Estilos</Heading>

            <RequestInput
                itemCol={stylesCol}
                setLoading={setLoading}
                placeholder={"Adicione um estilo "}
            />

            <WrapContainer>
                {styles?.length ? list(styles, stylesCol) : null}
            </WrapContainer>

        </>
    )
}


