import { CircularProgress, Button, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { findItemById } from "../../api";
import { logout } from "../../api/auth";
import { usersCol, } from "../../api/config";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MainContainer, Header, Background } from "../../theme";
import { ContractInfo } from "./ContractInfo";

const UserPage = () => {
    useProtectedPage("user")
    const router = useRouter()
    const { id } = router.query
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        findItemById(usersCol, id)
            .then(res => {
                setUser(res)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
    }, [id, loading]);


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
            <Header>
                <Button onClick={() => logout(router)} >
                    Sair
                </Button>
            </Header>
            <Background column={"column"} justifyContent={"start"}>
                {
                    user.active ?
                        <ContractInfo id={id} user={user} />
                        :
                        <MainContainer>
                            <Text textAlign={"center"}
                            >Sua conta ainda não foi ativada, entre em contato conosco para ativar.
                            </Text>
                        </MainContainer>
                }
            </Background>
        </>
    );
};

export default UserPage;
