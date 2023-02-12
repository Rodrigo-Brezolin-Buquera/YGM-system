import { Card } from "@chakra-ui/react"

export const SideContainer = ({ children }) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"brand.400"}
            minW={["250px","300px","350px"]}
            minH={"200px"}
            paddingTop={"1em"}
            justify-content={"center"}
            gap={"0.5em"}
            m={"0.8em"}
        >
            {children}

        </Card>
    )
}

