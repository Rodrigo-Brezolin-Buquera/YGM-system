import { Image } from "@chakra-ui/react"

const LogoImg = ({width, height, logo}) => {
    return (
        <Image maxW={width} maxH={height}  src={logo} alt="logo" />
    )
}

export default LogoImg
