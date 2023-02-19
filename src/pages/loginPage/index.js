import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import defaultLogo from "../../assets/defaultLogo.png";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { LogoImg } from "../../theme";
import { LoginForm } from "./LoginForm";

const LoginPage = () => {
    useUnprotectedPage();

    const navigate = useNavigate();

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            paddingBottom={"10em"}
            justifyContent={"center"}
            backgroundColor={"brand.400"}
            minH={"100vh"}
        >
            <Image maxW={"300px"} src={defaultLogo} alt="logo" />
            <LoginForm navigate={navigate} />
        </Box>
    );
};

export default LoginPage;
