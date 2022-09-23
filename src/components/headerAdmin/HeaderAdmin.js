import React from 'react'
import white from "../../assets/logo/white.png"
import { goToAdmin, goToCreateContract, goToCalendar, goToLogin } from '../../routes/coordinator'
import { HeaderContainer, Logo, ButtonContainer, MenuContainer } from './styled'
import { Button } from '@chakra-ui/react'
import { logout } from '../../services/firebase/auth'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"

const Header = ({ history }) => {

    const exitApp = () => {
        logout()
        goToLogin(history)
    }

    return (
        <HeaderContainer>
            <Logo src={white} alt="logo" />

            <ButtonContainer>
                <Button
                    onClick={() => goToAdmin(history)}
                >Home
                </Button>

                <Button
                    onClick={() => goToCreateContract(history)}
                >Criar Usuário
                </Button>

                <Button
                    onClick={() => goToCalendar(history)}
                >Agenda
                </Button>

                <Button
                    onClick={() => exitApp()}
                >Sair
                </Button>
            </ButtonContainer>

            <MenuContainer>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => goToAdmin(history)} >Home</MenuItem>
                        <MenuItem onClick={() => goToCreateContract(history)} >Criar Usuário</MenuItem>
                        <MenuItem onClick={() => goToCalendar(history)} >Agenda</MenuItem>
                        <MenuItem onClick={() => exitApp()}>Sair</MenuItem>
                    </MenuList>
                </Menu>
            </MenuContainer>

        </HeaderContainer>
    )
}

export default Header
