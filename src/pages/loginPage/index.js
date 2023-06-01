import { Box, Image, Text,useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import defaultLogo from "../../assets/defaultLogo.png";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { SignupModal } from "./SignupModal";
import { LoginForm } from "./LoginForm";

const LoginPage = () => {
    useUnprotectedPage();
    const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure()
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
            <Text _hover={{ cursor: "pointer" }} fontSize={"sm"}  onClick={onOpen} >Não possui conta? Crie uma aqui</Text>
            <SignupModal isOpen={isOpen} onClose={onClose} navigate={navigate} />

        </Box>
    );
};

export default LoginPage;
