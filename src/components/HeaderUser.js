import { Button} from "@chakra-ui/react";
import { logout } from "../api/auth";
import {  Header } from "../theme";

const HeaderUser = () => {
    return (
        <Header>
            <Button onClick={() => logout(router)} >
                Sair
            </Button>
        </Header>
    )
}

export default HeaderUser