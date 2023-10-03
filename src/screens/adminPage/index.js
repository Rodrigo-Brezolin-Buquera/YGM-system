import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background,  MainContainer, SideContainer } from "../../theme";
import { AdminActions } from "./AdminActions";
import AvailableClasses from "./AvailableClasses";

const AdminPage = ({classLimit, selectOptions}) => {
    useProtectedPage("admin")

    return (
        <>
            <HeaderAdmin />
            <Background >
                <MainContainer>
                    <AdminActions classLimit={classLimit} selectOptions={selectOptions} />
                </MainContainer>

                <SideContainer>
                    <AvailableClasses />
                </SideContainer>
            </Background>
        </>
    );
};

export default AdminPage;
