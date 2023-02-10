import { Image } from "@chakra-ui/react"

export const LogoImg = ({width, height, logo}) => {
    return (
        <Image maxW={width} maxH={height}  src={logo} alt="logo" />
    )
}
