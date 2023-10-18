
import { Text } from "@chakra-ui/react"
import { memo } from "react"
import { CircularCard } from "../../../theme"
import { goToClass } from "../../../routes/coordinator"

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