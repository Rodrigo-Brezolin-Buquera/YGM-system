import { Card, Text } from "@chakra-ui/react";
import { memo } from "react";
import { Line } from "../../../theme";
import { goToContract } from "../../../utils/coordinator";

const UserCard = ({user, router}) => {

    return (
        <Card
            display={"flex"}
            flexDirection={["column", "column", "column", "row"]}
            padding={"0.5em"}
            borderRadius={"10px"}
            minW={"250px"}
            width={"100%"}
            backgroundColor={"brand.500"}
            _hover={{ cursor: "pointer" }}
            overflow={"auto"}
            onClick={() => goToContract(router, `${user.id}----${user.name}`)}
        >
            <Line justifyContent={["center", "center", "center", "flex-start"]} >
                <Text as="b">Nome:</Text>
                <Text >{user.name}</Text>
                <br />
                <Text as="b" >Status: </Text>
                <Text >{user.active ? "Ativo" : "Inativo"}</Text>
            </Line>
        </Card>
    )
}

export default memo(UserCard)