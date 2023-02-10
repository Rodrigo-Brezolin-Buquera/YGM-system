import { Image } from "@chakra-ui/react"
import defaultLogo from "../../assets/logo/defaultLogo.png";



export const LogoImg = () => {
    return (
        <Image maxW={"300px"} mt={"1em"} src={defaultLogo} alt="logo" />
    )
}
