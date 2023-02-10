import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import flower from "../../assets/logo/flower.png";
import { goBack } from "../../routes/coordinator";
import { FlowerLogo, ErrorContainer, TextContainer } from "./styled";

const ErrorPage = () => {
    const history = useHistory();

    return (
        <ErrorContainer>
            <FlowerLogo src={flower} alt="logo flor" />
            <TextContainer>
                <Text fontSize='2xl'> Erro 404: Página não encontrada </Text>
                <Text > Verifique a URL ou clique em voltar </Text>

                <Button
                    colorScheme='yellow'
                    onClick={() => goBack(history)}
                >Voltar
                </Button>
            </TextContainer>
        </ErrorContainer>
    );
};

export default ErrorPage;
