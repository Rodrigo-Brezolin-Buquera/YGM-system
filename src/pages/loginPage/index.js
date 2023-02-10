import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LogoImg } from "../../theme/LogoImg";
import { colors } from "../../theme/colors";
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
            backgroundColor={colors.lightNeutral}
            minH={"100vh"}
        >
            <LogoImg />
            <LoginForm navigate={navigate} />
        </Box>
    );
};

export default LoginPage;
