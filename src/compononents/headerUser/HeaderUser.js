import React, { useLayoutEffect } from 'react'
import white from "../../assets/logo/white.png"
import { goToAdmin, goToCreateUser, goToEditCalendar, goToEditProfile, goToLogin } from '../../routes/coordinator'
import { HeaderContainer, Logo, ButtonContainer, StyledButton } from './styled'
import Button from '@material-ui/core/Button'


const Header = ({history}) => {
 

    const logout = () => {
        localStorage.removeItem("token")
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
                        onClick={() => logout()}
                    >Sair
                    </Button>
                </ButtonContainer>    
        </HeaderContainer>
    )
}

export default Header
