import { Button} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { logout } from "../api/auth";
import {  Header } from "../theme";

const HeaderUser = () => {
    const router = useRouter()

    return (
        <Header>
            <Button onClick={() => logout(router)} >
                Sair
            </Button>
        </Header>
    )
}

export default HeaderUser