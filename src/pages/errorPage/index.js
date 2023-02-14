import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import flower from "../../assets/flower.png";
import { goBack } from "../../routes/coordinator";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Box
            display={"flex"}
            flexDirection={["column", "row", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"brand.400"}
            h="100vh"
            w={"100vw"}
        >
            <Image src={flower} maxWidth={"250px"} alt="logo flor" />
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"0.5em"}
            >
                <Text fontSize='2xl'> Erro 404: Página não encontrada </Text>
                <Text > Verifique a URL ou clique em voltar </Text>

                <Button
                    backgroundColor={"brand.200"}
                    onClick={() => goBack(navigate)}
                >Voltar
                </Button>
            </Box>
        </Box>
    );
};

export default ErrorPage;
