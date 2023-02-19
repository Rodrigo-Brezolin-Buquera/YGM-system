import { Card } from "@chakra-ui/react"


const TextCard = ({ children, width }) => {
    return (
        <Card
            minW={width}
            minH={"2em"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            backgroundColor={"brand.200"}
            padding={"1em"}
            borderRadius={"20px"}
        >
            {children}
        </Card>
    )
}

export default TextCard