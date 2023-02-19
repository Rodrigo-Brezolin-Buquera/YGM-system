import { Card } from "@chakra-ui/react"

const SquareCard = ({ children, color, onClick }) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            backgroundColor={color || "brand.500"}
            minW={"180px"}
            w={"70%"}
            gap={"0.5em"}
            borderRadius={"10px"}
            p={"0.5em"}
            _hover={{ cursor: "pointer" }}
            onClick={onClick}
        >
            {children}
        </Card>
    )
}

export default SquareCard