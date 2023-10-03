import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import { Local } from "./Local";
import { Plans } from "./Plans";

const BusinessPage = () => {
    useProtectedPage("admin")

    return (
        <>
            <HeaderAdmin />
            <Background>
                <MainContainer>
                    <Local />
                </MainContainer>
                <MainContainer>
                    <Plans />
                </MainContainer>
            </Background>
        </>
    )
}

export default BusinessPage