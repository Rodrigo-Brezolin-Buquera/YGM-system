import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Background, MainContainer } from "../../theme"
import { goBack } from "../../utils/coordinator";

const ErrorPage = () => {
    const router = useRouter()
    return (
        <Background>
            <MainContainer>
                <Image src={"/assets/defaultLogo.png"} maxWidth={"250px"} alt="logo flor" />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"0.5em"}
                >
                    <Text fontSize='xl' textAlign={"center"}> Erro 404: Página não encontrada </Text>
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
