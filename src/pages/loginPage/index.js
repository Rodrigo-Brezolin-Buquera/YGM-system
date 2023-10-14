import { Box, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { LoginForm } from "./loginForm/LoginForm";
import { ResetPasswordModal } from "./resetPasswordModal/ResetPasswordModal";
import { SignupModal } from "./signupModal/SignupModal";
import defaultLogo from "../../assets/defaultLogo.png"


const LoginPage = () => {
    useUnprotectedPage();
    const { isOpen: isSignupOpen, onOpen: onSignupOpen, onClose: onSignupClose } = useDisclosure()
    const { isOpen: isResetOpen, onOpen: onResetOpen, onClose: onResetClose } = useDisclosure()

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
            <Image maxW={"280px"} src={defaultLogo} alt="logo" />
            <LoginForm />
            <Text
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                fontSize={"sm"}
                onClick={onSignupOpen}
            >
                Não possui conta? Crie uma aqui
            </Text>
            <Text
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                fontSize={"sm"}
                onClick={onResetOpen}
            >
                Esqueceu a senha? Clique aqui
            </Text>
            <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
            <ResetPasswordModal isOpen={isResetOpen} onClose={onResetClose} />
        </Box>
    );
};

export default LoginPage;
