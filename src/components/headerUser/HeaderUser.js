import React from 'react'
import white from "../../assets/logo/white.png"
import { goToLogin } from '../../routes/coordinator'
import { HeaderContainer, Logo, ButtonContainer } from './styled'
import { Button } from '@chakra-ui/react'
import { logout } from '../../services/firebase/auth'

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

                    onClick={() => exitApp()}
                >
                     Sair 
                </Button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export default Header
