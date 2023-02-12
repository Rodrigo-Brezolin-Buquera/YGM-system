import { Card } from "@chakra-ui/react"
import { colors } from "."

export const ButtonContainer = ({ children }) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            backgroundColor={"brand.400"}
            w={"100%"}
            p={"0.5em"}
            gap={["1em","1em","2em"]}
        >
            {children}
        </Card>
    )
}