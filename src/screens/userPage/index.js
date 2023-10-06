import { CircularProgress, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import HeaderUser from "../../components/HeaderUser";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { MainContainer, Background } from "../../theme";
import { UserActions } from "./userActions/UserActions";

const UserPage = () => {
    useProtectedPage("user")
    const router = useRouter()
    const { id } = router.query
    const { data: contract, loading } = useRequestData("/contracts/user", id)

    if (loading) {
        return (
            <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <CircularProgress
                    isIndeterminate
                    color={"brand.200"}
                    size="120px"
                    mt={"1em"}
                />
            </Box>
        )
    }

    return (
        <>
            <HeaderUser />
            <Background column={"column"} justifyContent={"start"}>
                <MainContainer>
                    {
                        contract === null
                            ?
                            <Text textAlign={"center"}>
                                Sua conta ainda não foi ativada, entre em contato conosco para ativar.
                            </Text>
                            :
                            <UserActions contract={contract} />
                    }
                </MainContainer>
            </Background>
        </>
    );
};

export default UserPage;
