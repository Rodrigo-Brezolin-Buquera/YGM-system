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
                    colorScheme={"yellow"}                
                        onClick={() => goToAdmin(history)}
                    >Home
                    </Button>

                    <Button
                        colorScheme={"yellow"}   
                        onClick={() => goToCreateContract(history)}
                    >Criar Usuário
                    </Button>

                    <Button
                        colorScheme={"yellow"}   
                        onClick={() => goToCalendar(history)}
                    >Agenda
                    </Button>

                    <Button
                      colorScheme={"yellow"}     
                        onClick={() => exitApp()}
                    >Sair
                    </Button>
                </ButtonContainer>
                      
        </HeaderContainer>
    )
}

export default Header
