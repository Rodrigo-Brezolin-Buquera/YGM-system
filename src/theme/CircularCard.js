import { Box } from "@chakra-ui/react"


const CircularCard = ({ children, color }) => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"25px"}
            width={"120px"}
            backgroundColor={color}
            padding={"0.3em"}
        >
            {children}
        </Box>
    )
}

export  default CircularCard