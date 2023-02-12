import { Box } from "@chakra-ui/react"
import { colors } from "./colors"

export const ButtonContainer = ({ children }) => {
    return (
        <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            backgroundColor={colors.lightNeutral}
            w={"100%"}
            p={"1em"}
            gap={"2em"}
        >
            {children}

        </Box>
    )
}