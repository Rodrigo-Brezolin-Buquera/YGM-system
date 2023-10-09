import { useRouter } from "next/router";
import { CheckinsDone } from "./checkinsDone/CheckinsDone";
import Header from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer, SideContainer } from "../../theme";
import { ContractActions } from "./contractActions/contractActions";

const ContractPage = () => {
    useProtectedPage("admin")
    const router = useRouter()
    const { id } = router.query
    const [userId, userName] = (id || "").split("++")

    return (
        <>
            <Header />

            <Background >
                <SideContainer>
                    <CheckinsDone userId={userId} />
                </SideContainer>
                <MainContainer>
                    <ContractActions
                        userId={userId}
                        userName={userName || ""}
                    />
                </MainContainer>
            </Background>

        </>
    );
};

export default ContractPage;
