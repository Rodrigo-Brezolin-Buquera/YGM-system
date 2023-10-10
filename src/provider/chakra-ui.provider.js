"use client"

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import "@fontsource/raleway/400.css"


const ChakraUiProvider = ({children}) => {
    return (
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    )
  }
  
  export default ChakraUiProvider  


