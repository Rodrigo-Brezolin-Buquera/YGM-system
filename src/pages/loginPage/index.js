import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import defaultLogo from "../../assets/defaultLogo.png";
import { LogoImg } from "../../theme";
import { LoginForm } from "./LoginForm";

const LoginPage = () => {
    const navigate = useNavigate();
    // useUnprotectedPage();

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            paddingTop={"1em"}
            backgroundColor={"brand.400"}
            minH={"100vh"}
        >
            <LogoImg width={"300px"} logo={defaultLogo}/>
            <LoginForm navigate={navigate} />
        </Box>
    );
};

export default LoginPage;
