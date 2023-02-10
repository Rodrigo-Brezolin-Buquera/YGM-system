import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Show,
    Hide,
    useDisclosure
} from "@chakra-ui/react";
import { logout } from "../api/auth";
import { goToAdmin, goToCalendar } from "../routes/coordinator";
import Header from "../theme/Header"
import { CreateContractModal } from "./CreateContractModal";

const HeaderAdmin = ({ navigate }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Header>
            <Show above='md'>
                <Hide below="md">
                    <Button
                        onClick={() => goToAdmin(navigate)}
                    >Home
                    </Button>
                    <Button
                        onClick={onOpen}
                    >Criar Usuário
                    </Button>
                    <Button
                        onClick={() => goToCalendar(navigate)}
                    >Agenda
                    </Button>
                    <Button
                        onClick={() => logout(navigate)}
                    >Sair
                    </Button>
                </Hide>

            </Show>

            <Show below='md'>
                <Hide above="md" >
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Menu
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => goToAdmin(navigate)} >Home</MenuItem>
                            <MenuItem onClick={onOpen} >Criar Usuário</MenuItem>
                            <MenuItem onClick={() => goToCalendar(navigate)} >Agenda</MenuItem>
                            <MenuItem onClick={() => logout(navigate)}>Sair</MenuItem>
                        </MenuList>
                    </Menu>
                </Hide>
            </Show>

            <CreateContractModal isOpen={isOpen} onClose={onClose}  />

        </Header>
    );
};

export default HeaderAdmin;
