
import { Text } from "@chakra-ui/react"
import { memo } from "react"
import { goToClass } from "../../../utils/coordinator"
import { CircularCard } from "../../../theme"

const ClassCard = ({ yogaClass, router }) => {
    return (
        <CircularCard
            key={yogaClass.id}
            color={"brand.200"}
            onClick={() => goToClass(router, yogaClass.id)}
        >
            <Text fontSize="xl" >{yogaClass?.time}</Text>
            <Text fontSize="sm" >Vagas:  {yogaClass?.capacity}</Text>
        </CircularCard>)
}

export default memo(ClassCard)