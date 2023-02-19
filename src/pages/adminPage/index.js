import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background,  MainContainer, SideContainer } from "../../theme";
import { AdminActions } from "./AdminActions";
import AvailableClasses from "./AvailableClasses";

const AdminPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Background >
                <MainContainer>
                    <AdminActions navigate={navigate} />
                </MainContainer>

                <SideContainer>
                    <AvailableClasses navigate={navigate} />
                </SideContainer>
            </Background>
        </>
    );
};

export default AdminPage;
