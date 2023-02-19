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
import { logout } from "../api/auth";
import { goToAdmin, goToBusiness, goToCalendar } from "../routes/coordinator";
import Header from "../theme/Header"

const HeaderAdmin = ({ navigate }) => {

    return (
        <Header>
            <Show above='md' >
                <Hide below="md"    >
                    <Button 
                        onClick={() => goToAdmin(navigate)}
                    >Home
                    </Button>
                    <Button                  
                        onClick={() => goToBusiness(navigate)}
                    >Negócio
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
                            <MenuItem onClick={() => goToBusiness(navigate)} >Negócio</MenuItem>
                            <MenuItem onClick={() => goToCalendar(navigate)} >Agenda</MenuItem>
                            <MenuItem onClick={() => logout(navigate)}>Sair</MenuItem>
                        </MenuList>
                    </Menu>
                </Hide>
            </Show>


        </Header>
    );
};

export default HeaderAdmin;
