import { Box } from "@chakra-ui/react";
import React from "react";
import whiteLogo from "../assets/whiteLogo.png";
import { LogoImg } from "./LogoImg";
import { colors } from "./colors";


const Header = ({ children }) => {

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
               
            </Box>
        </Box>
    );
};

export default Header;