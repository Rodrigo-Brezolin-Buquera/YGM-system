import { Box, Image, Text,useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { LoginForm } from "./LoginForm";
import { SignupModal } from "./SignupModal";


const LoginPage = () => {
    useUnprotectedPage();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()

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
            <LoginForm router={router}  />
            <Text _hover={{ cursor: "pointer" }} fontSize={"sm"}  onClick={onOpen} >Não possui conta? Crie uma aqui</Text>
            <SignupModal isOpen={isOpen} onClose={onClose} router={router}  />
        </Box>
    );
};

export default LoginPage;
