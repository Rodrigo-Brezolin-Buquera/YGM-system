import { Card } from "@chakra-ui/react"

const TextContainer = ({ children }) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"column"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"start"}
            backgroundColor={"brand.400"}
            w={"100%"}
            p={"0.5em"}
            gap={"0.5em"}
            fontSize={"lg"}
        >
            {children}
        </Card>)
}

export default TextContainer


