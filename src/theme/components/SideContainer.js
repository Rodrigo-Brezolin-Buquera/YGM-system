import { Card } from "@chakra-ui/react"

const SideContainer = ({ children }) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"brand.400"}
            minW={["250px","280px","320px"]}
            minH={"200px"}
            padding={"1em 0"}
            justify-content={"center"}
            gap={"0.5em"}
            m={"0.8em"}
        >
            {children}

        </Card>
    )
}

export default SideContainer    
