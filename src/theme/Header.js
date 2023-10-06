import { Box, Image } from "@chakra-ui/react";

const Header = ({ children }) => {

    return (
        <Box
            display={"flex"}
            backgroundColor={"brand.300"}
            height={"70px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"0.3em"}
        >
            <Image maxH={"52px"} src={"/assets/defaultLogo.png"} alt="logo"  />
            <Box
                display={"flex"}
                gap={"0.5em"}
                marginRight={"0.2em"}
            >
                {children}     
            </Box>
        </Box>
    );
};

export default Header;
