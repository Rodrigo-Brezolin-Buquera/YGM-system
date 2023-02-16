import { Image } from "@chakra-ui/react"
import { memo } from "react"

const LogoImg = ({width, height, logo}) => {
    return (
        <Image maxW={width} maxH={height}  src={logo} alt="logo" />
    )
}

export default memo(LogoImg)
