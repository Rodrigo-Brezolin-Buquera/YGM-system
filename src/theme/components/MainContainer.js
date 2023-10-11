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
            minH={"150px"}
            p={"1em"}
            gap={"1em"}
            w={["auto","100%","100%"]}
            m={"0.8em"}
            position={"relative"}
        >
            {children}

        </Card>
    )
}

export default MainContainer