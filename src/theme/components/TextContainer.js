import { Box } from "@chakra-ui/react"

const TextContainer = ({ children, alignItems }) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={alignItems || "start"}
            backgroundColor={"brand.400"}
            w={"100%"}
            p={"0.5em"}
            gap={"0.5em"}
            fontSize={"lg"}
        >
            {children}
        </Box>)
}

export default TextContainer


