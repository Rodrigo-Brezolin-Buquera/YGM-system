import { useNavigate, useParams } from "react-router-dom";
import { CheckinsDone } from "../../components/CheckinsDone";
import Header from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer, SideContainer } from "../../theme";
import { UserActions } from "./UserActions";

const ContractPage = () => {
    useProtectedPage("admin")
    const { userId } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <Header navigate={navigate} />

            <Background >
                <SideContainer>
                    <CheckinsDone userId={userId} />
                </SideContainer>
                <MainContainer>
                    <UserActions userId={userId} navigate={navigate} />
                </MainContainer>
            </Background>

        </>
    );
};

export default ContractPage;
