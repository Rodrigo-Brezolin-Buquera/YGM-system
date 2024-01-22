import { CircularProgress, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useRequestData } from '../../../hooks/useRequestData'
import { TextContainer } from '../../../theme'
import { WhatsappLink } from './whatsappLink/WhatsappLink'

export const MessageBoard = () => {
    const {data:message, loading } = useRequestData("/messages/welcomeMessage")

    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    console.log(message)

  return (
    <TextContainer alignItems={"center"}>
        <Heading size={"md"}>{message.content && "Avisos"}</Heading>

        {
            message.content 
            ? 
            <Text fontSize='lg' >{message.content}</Text>
            :
            <WhatsappLink/>
        } 
    </TextContainer>
  )
}

