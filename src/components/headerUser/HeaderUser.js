import { Button } from "@chakra-ui/react";
import React from "react";
import white from "../../assets/logo/white.png";
import { goToLogin } from "../../routes/coordinator";
import { logout } from "../../services/auth/auth";
import { HeaderContainer, Logo, ButtonContainer } from "./styled";

const Header = ({ history }) => {
    const exitApp = () => {
        logout();
        goToLogin(history);
    };

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
    );
};

export default Header;
