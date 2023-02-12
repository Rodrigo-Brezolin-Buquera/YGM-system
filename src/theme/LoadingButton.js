import { CircularProgress, Button, Box } from "@chakra-ui/react"
import { useState } from "react"

export const LoadingButton = ({ handler, color, children }) => {
    const [loading, setLoading] = useState(false)

    const onClick = async () => {
        setLoading(true)
        await handler()
        setLoading(false)
    }

    return (
        <Box>
            {loading ?
                <CircularProgress isIndeterminate color={color} size="30px" />
                :
                <Button
                    onClick={onClick}
                    backgroundColor={color}
                    variant={"normal"}                   
                >
                    {children}
                </Button>
            }
        </Box>
    )
}