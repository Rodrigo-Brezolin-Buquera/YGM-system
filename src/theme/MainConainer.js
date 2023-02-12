import { Card } from "@chakra-ui/react"
import { colors } from "./colors"

export const MainContainer = ({ children }) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"top"}
            backgroundColor={colors.lightNeutral}
            minW={"250px"}
            minH={"200px"}
            p={"1em"}
            gap={"0.5em"}
            w={"100%"}
            m={"1em"}
        >
            {children}

        </Card>
    )
}