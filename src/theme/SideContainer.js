import { Box } from "@chakra-ui/react"
import { colors } from "./colors"

export const SideContainer = ({ children }) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={colors.primary}
            minW={"250px"}
            minH={"200px"}
            paddingTop={"1em"}
            justify-content={"center"}
            gap={"0.5em"}
        >
            {children}

        </Box>
    )
}

