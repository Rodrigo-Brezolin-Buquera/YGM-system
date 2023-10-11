import { Card, Box } from "@chakra-ui/react"

const WrapContainer = ({ children, shadow }) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            backgroundColor={"brand.400"}
            w={"100%"}
            p={"0.5em"}
            gap={["1em","1em","2em"]}
            borderRadius={"8px"}
            boxShadow={ shadow ? "md" : "none"}

        >
            {children}
        </Box>
    )
}

export default WrapContainer