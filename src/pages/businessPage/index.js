
import HeaderAdmin from "../../components/HeaderAdmin";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Background, MainContainer } from "../../theme";
import { Local } from "./local/Local";
import { Messages } from "./messages/Messages";
import { Plans } from "./plans/Plans";

const BusinessPage = () => {
    useProtectedPage("admin")

    return (
        <>
            <HeaderAdmin />
            <Background>
                <MainContainer>
                    <Local />
                    <Messages/>
                </MainContainer>
                <MainContainer>
                    <Plans />
                </MainContainer>
            </Background>
        </>
    )
}

export default BusinessPage