import { Main } from "next/document";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import { Local } from "./local/Local";
import { Plans } from "./plans/Plans";

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