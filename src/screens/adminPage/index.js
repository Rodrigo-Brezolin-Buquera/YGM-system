import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background,  MainContainer, SideContainer } from "../../theme";
import { AdminActions } from "./AdminActions";
import AvailableClasses from "./AvailableClasses";

const AdminPage = () => {
    useProtectedPage("admin")

    return (
        <>
            <HeaderAdmin />
            <Background >
                <MainContainer>
                    <AdminActions />
                </MainContainer>

                <SideContainer>
                    <AvailableClasses />
                </SideContainer>
            </Background>
        </>
    );
};

export default AdminPage;
