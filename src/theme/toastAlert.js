import { Box } from "@chakra-ui/react"

const toastAlert = (toast, message, type) => {
    let textColor
    let color

    switch (type) {
        case "success":
            textColor="white"
            color="green.300"
            break;
        case "error":
            textColor="white"
            color="red.500"
            break;
        default:
            break;
    }

    toast({
        position: "top-right",
        render: () => (
            <Box
                color={textColor}
                p={3}
                bg={color}
                borderRadius={"10px"}
            >
                {message}
            </Box>
        )
    })
}

export default toastAlert