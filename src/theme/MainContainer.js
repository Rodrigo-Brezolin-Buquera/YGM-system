import { Card } from "@chakra-ui/react"

const MainContainer = ({ children }) => {
    return (
        <Card
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"top"}
            backgroundColor={"brand.400"}
            minW={"250px"}
            minH={"200px"}
            p={"1em"}
            gap={"0.5em"}
            w={["auto","100%","100%"]}
            m={"0.8em"}
        >
            {children}

        </Card>
    )
}

export default MainContainer