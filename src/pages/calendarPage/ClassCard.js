
import { Text } from "@chakra-ui/react"
import { memo } from "react"
import { goToClass } from "../../routes/coordinator"
import { CircularCard } from "../../theme"

const ClassCard = ({ yogaClass, navigate, setSelected }) => {

    const bookingHandler = () => {
        setSelected(yogaClass)
        document.body.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    return (
        <CircularCard
            key={yogaClass.id}
            color={"brand.200"}
            onClick={bookingHandler}
            onDoubleClick={() => goToClass(navigate, yogaClass.id)}
        >
            <Text fontSize="xl" >{yogaClass?.time}</Text>
            <Text fontSize="sm" >Vagas:  {yogaClass?.capacity}</Text>
        </CircularCard>)
}

export default memo(ClassCard)