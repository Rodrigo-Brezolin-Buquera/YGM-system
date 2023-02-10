import { Box, Button } from "@chakra-ui/react";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";
import whiteLogo from "../assets/whiteLogo.png";
import { goToLogin } from "../routes/coordinator";
import { colors } from "../theme/colors";
import { LogoImg } from "../theme/LogoImg";


const Header = ({ children }) => {
    // const navigate = useNavigate();

    const exitApp = () => {
        logout()
        goToLogin();
    };


    return (
        <Box
            display={"flex"}
            backgroundColor={colors.darkNeutral}
            height={"60px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"0.3em"}
        >
            <LogoImg height={"50px"} logo={whiteLogo} />
            <Box
                display={"flex"}
                gap={"0.2em"}
                marginRight={"0.2em"}
            >

                {children}
                <Button
                    onClick={exitApp}
                >
                    Sair
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
