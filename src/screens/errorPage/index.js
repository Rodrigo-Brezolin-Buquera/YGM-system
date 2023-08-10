import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { goBack } from "../../routes/coordinator";
import { Background, MainContainer } from "../../theme"

const ErrorPage = () => {
    const router = useRouter()
    return (
        <Background>
            <MainContainer>
                <Image src={"/assets/flower.png"} maxWidth={"250px"} alt="logo flor" />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"0.5em"}
                >
                    <Text fontSize='2xl' textAlign={"center"}> Erro 404: Página não encontrada </Text>
                    <Text > Verifique a URL ou clique em voltar </Text>

                    <Button
                        backgroundColor={"brand.200"}
                        onClick={() => goBack(router)}
                    >Voltar
                    </Button>
                </Box>
            </MainContainer>

        </Background>
    );
};

export default ErrorPage;
