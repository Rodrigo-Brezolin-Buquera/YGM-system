import React from 'react'
import white from "../../assets/logo/white.png"
import { goToLogin } from '../../routes/coordinator'
import { HeaderContainer, Logo, ButtonContainer } from './styled'
import Button from '@material-ui/core/Button'
import { logout } from '../../services/firebase/auth'

const Header = ({history}) => {
    const exitApp = () => {
        logout()
        goToLogin(history)
    }

    return (
        <HeaderContainer>
            <Logo src={white} alt="logo" />
                <ButtonContainer>              
                    <Button
                        type={"submit"}
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => exitApp()}
                    >Sair
                    </Button>
                </ButtonContainer>    
        </HeaderContainer>
    )
}

export default Header
