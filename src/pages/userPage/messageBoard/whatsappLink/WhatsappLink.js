import { Box, Image, Text } from "@chakra-ui/react"
import Whatsapp from "../../../../assets/Whatsapp.png"

export const WhatsappLink = () => {
    const link = "https://chat.whatsapp.com/JMHCFe5fo0O13fjJeGcvfG"

    return (
        <Box justifySelf={"end"}>
            <a href={link} target="_blank">
                <Box display={"flex"} gap={"0.3em"} alignItems={"center"} >
                    <Image src={Whatsapp} width={35} height={35} alt="Whatsapp" />
                    <Text fontSize={"lg"} fontWeight={"bold"}>Grupo WhatsApp</Text>
                </Box>
            </a>
        </Box>
    )
}

