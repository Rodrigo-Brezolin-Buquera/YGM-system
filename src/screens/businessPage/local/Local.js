import { Text, Heading, CircularProgress } from "@chakra-ui/react";
import { DoubleClickText } from "../../../components/DoubleClickText";
import { useRequestData } from "../../../hooks/useRequestData";
import { Line, TextContainer } from "../../../theme";

export const Local = () => {
    const { data, loading } = useRequestData("/business")
    const editPath = "/business"

    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    return (
        <>
            <TextContainer>
                <Heading alignSelf={"center"} size={"md"}>Espaço e Contatos</Heading>
                <Line>
                    <Text fontWeight={"bold"} > Endereço:</Text>
                    <DoubleClickText text={data.address} atribute={"address"} path={editPath} />
                </Line>

                <Line>
                    <Text fontWeight={"bold"} > Telefone: </Text>
                    <DoubleClickText text={data.phone} atribute={"phone"} path={editPath} />
                </Line>

                <Line>
                    <Text fontWeight={"bold"} > Email:</Text>
                    <DoubleClickText text={data.email} atribute={"email"} path={editPath} />
                </Line>

                <Line>
                    <Text fontWeight={"bold"} > Site:</Text>
                    <DoubleClickText text={data.website} atribute={"website"} path={editPath} />
                </Line>

                <Line>
                    <Text fontWeight={"bold"} > Facebook:</Text>
                    <DoubleClickText text={data.facebook} atribute={"facebook"} path={editPath} />
                </Line>

                <Line>
                    <Text fontWeight={"bold"} > Instagram:</Text>
                    <DoubleClickText text={data.instagram} atribute={"instagram"} path={editPath} />
                </Line>

            </TextContainer>
        </>
    )
}



