import { Box } from "@chakra-ui/react"


const CircularCard = ({ children, color,width, onClick, onDoubleClick, hover }) => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={"25px"}
            width={ width || "120px"}
            backgroundColor={color}
            padding={"0.3em"}
            _hover={{ cursor: hover || "pointer" }}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            {children}
        </Box>
    )
}

export  default CircularCard