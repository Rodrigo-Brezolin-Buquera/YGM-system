import { useRouter } from "next/router";
import { CheckinsDone } from "../../components/CheckinsDone";
import Header from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer, SideContainer } from "../../theme";
import { UserActions } from "./UserActions";

const ContractPage = () => {
    useProtectedPage("admin")
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Header  />

            <Background >
                <SideContainer>
                    <CheckinsDone userId={id} />
                </SideContainer>
                <MainContainer>
                    <UserActions userId={id} router={router}  />
                </MainContainer>
            </Background>

        </>
    );
};

export default ContractPage;
