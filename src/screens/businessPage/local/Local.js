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
                    <Text> Endereço:</Text>
                    <DoubleClickText text={data.address} atribute={"address"} path={editPath} />
                </Line>

                <Line>
                    <Text> Telefone: </Text>
                    <DoubleClickText text={data.phone} atribute={"phone"} path={editPath} />
                </Line>

                <Line>
                    <Text> Email:</Text>
                    <DoubleClickText text={data.email} atribute={"email"} path={editPath} />
                </Line>

                <Line>
                    <Text> Site:</Text>
                    <DoubleClickText text={data.website} atribute={"website"} path={editPath} />
                </Line>

                <Line>
                    <Text> Facebook:</Text>
                    <DoubleClickText text={data.facebook} atribute={"facebook"} path={editPath} />
                </Line>

                <Line>
                    <Text> Instagram:</Text>
                    <DoubleClickText text={data.instagram} atribute={"instagram"} path={editPath} />
                </Line>

            </TextContainer>
        </>
    )
}



