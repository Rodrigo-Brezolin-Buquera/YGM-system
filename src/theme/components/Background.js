
import { Box } from "@chakra-ui/react"

const Background = ({children, column, justifyContent}) => {
    return (
        <Box
            display={"flex"}
            w={"100%"}
            h={"100%"}
            flexGrow={1}
            backgroundColor={"brand.700"}
            flexDirection={[column || "column-reverse", "row", "row"]}
            justifyContent={[justifyContent || "flex-end", "start", "start"]}
        >
            {children}

        </Box>
    )
}

export default Background


