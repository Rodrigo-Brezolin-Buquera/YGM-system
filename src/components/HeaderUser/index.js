import { Button} from "@chakra-ui/react";
import { logout } from "../../api/auth";
import {  Header } from "../../theme";
import { useNavigate } from "react-router-dom";


const HeaderUser = () => {
    const router = useNavigate()

    return (
        <Header>
            <Button onClick={() => logout(router)} >
                Sair
            </Button>
        </Header>
    )
}

export default HeaderUser