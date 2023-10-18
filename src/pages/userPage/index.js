import { CircularProgress, Text, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ContractDetails } from "../../components/ContractDetails";
import HeaderUser from "../../components/HeaderUser";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { MainContainer, Background, WrapContainer } from "../../theme";
import AvailableClasses from "./availableClasses/AvailableClasses";
import { WhatsappLink } from "./whatsappLink/WhatsappLink";

const UserPage = () => {
    useProtectedPage("user")
    const {id} = useParams()
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
                            : <>
                                <WhatsappLink/>
                                <WrapContainer shadow={true}>
                                    <ContractDetails
                                        contract={contract}
                                        admin={false}
                                    />
                                </WrapContainer>
                                <AvailableClasses
                                    contractId={contract.id}
                                    name={contract.name}
                                    plan={contract.plan}
                                />
                            </>
                    }
                </MainContainer>

            </Background>
        </>
    );
};

export default UserPage;
