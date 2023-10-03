import { Box, Image, Text,useDisclosure } from "@chakra-ui/react";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { LoginForm } from "./LoginForm";
import { SignupModal } from "./SignupModal";


const LoginPage = () => {
    useUnprotectedPage();
    const { isOpen, onOpen, onClose } = useDisclosure()

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
            <Image maxW={"300px"} src={"/assets/defaultLogo.png"} alt="logo" />
            <LoginForm />
            <Text _hover={{ cursor: "pointer" }} fontSize={"sm"}  onClick={onOpen} >Não possui conta? Crie uma aqui</Text>
            <SignupModal isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};

export default LoginPage;
