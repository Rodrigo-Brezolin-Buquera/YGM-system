import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Show,
    Hide
} from "@chakra-ui/react";
import { logout } from "../../api/auth";
import { Header } from "../../theme";
import { goToAdmin, goToBusiness, goToCalendar } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


const HeaderAdmin = () => {
    const router = useNavigate();

    return (
        <Header>
            <Show above='md' >
                <Hide below="md"    >
                    <Button 
                        onClick={() => goToAdmin(router)}
                    >Home
                    </Button>
                    <Button                  
                        onClick={() => goToBusiness(router)}
                    >Negócio
                    </Button>                              
                    <Button
                        onClick={() => goToCalendar(router)}
                    >Agenda
                    </Button>
                    <Button               
                        onClick={() => logout(router)}
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
                            <MenuItem onClick={() => goToAdmin(router)} >Home</MenuItem>
                            <MenuItem onClick={() => goToBusiness(router)} >Negócio</MenuItem>
                            <MenuItem onClick={() => goToCalendar(router)} >Agenda</MenuItem>
                            <MenuItem onClick={() => logout(router)}>Sair</MenuItem>
                        </MenuList>
                    </Menu>
                </Hide>
            </Show>


        </Header>
    );
};

export default HeaderAdmin;
