
import { Box } from "@chakra-ui/react"

const Background = ({children, column, justifyContent}) => {
    return (
        <Box
            display={"flex"}
            w={"100%"}
            h={"100%"}
            minH={"100vh"}
            backgroundColor={"brand.100"}
            flexDirection={[column || "column-reverse", "row", "row"]}
            justifyContent={[justifyContent || "flex-end", "start", "start"]}
        >
            {children}

        </Box>
    )
}

export default Background


