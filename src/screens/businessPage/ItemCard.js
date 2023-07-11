import { DeleteIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { memo } from "react"
import { TextCard } from "../../theme"

const ItemCard = ({ item, itemCol, onDelete }) => {
    return (
        <TextCard
            width={"120px"}
        >
            <Text>{item.name} </Text>

            <DeleteIcon _hover={{ cursor: "pointer" }} onClick={() => onDelete(itemCol, item.id, item.name)} />
        </TextCard>)

}

export default memo(ItemCard)