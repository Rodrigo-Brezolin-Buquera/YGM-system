import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import { Local } from "./Local";
import { Plans } from "./Plans";
import { TeachersAndStyles } from "./TeachersAndStyles";

const BusinessPage = () => {
    useProtectedPage("admin")
    const navigate = useNavigate();

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Background>
                <MainContainer>
                    <Local />
                    <TeachersAndStyles />
                </MainContainer>
                <MainContainer>
                    <Plans />
                </MainContainer>
            </Background>
        </>
    )
}

export default BusinessPage