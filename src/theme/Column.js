import { Box } from "@chakra-ui/react"

const Column = ({ children }) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            minW={["100px", "150px", "250px"]}
        >
            {children}
        </Box>
    )
}

export default Column