import { Box, Image, Text } from "@chakra-ui/react"

export const WhatsappLink = () => {
    const link = "https://chat.whatsapp.com/JMHCFe5fo0O13fjJeGcvfG"

    return (
        <Box justifySelf={"end"}>
            <a href={link} target="_blank">
                <Box display={"flex"} gap={"0.3em"} alignItems={"center"} >
                    <Image src={"/assets/Whatsapp.png"} width={35} height={35} alt="Whatsapp" />
                    <Text fontSize={"lg"} fontWeight={"bold"}>Grupo WhatsApp</Text>
                </Box>
            </a>
        </Box>
    )
}

