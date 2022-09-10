import React from 'react'
import white from "../../assets/logo/white.png"
import { goToAdmin, goToCreateContract, goToCalendar, goToAdminLogin } from '../../routes/coordinator'
import { HeaderContainer, Logo, ButtonContainer } from './styled'
import {Button} from '@chakra-ui/react'
import { logout } from '../../services/firebase/auth'

const Header = ({history}) => {
    
    const exitApp = () => {
        logout()
        goToAdminLogin(history)
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
                        type={"submit"}
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => goToCreateContract(history)}
                    >Criar Usuário
                    </Button>

                    <Button
                        type={"submit"}
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => goToCalendar(history)}
                    >Agenda
                    </Button>

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
