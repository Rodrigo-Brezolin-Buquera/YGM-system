import { Box, ChakraProvider } from "@chakra-ui/react"
import { Head } from 'next/head'
import theme from "../theme"
import "@fontsource/raleway/400.css"


export default function App({ Component, pageProps }) {
  
    return (
        <ChakraProvider theme={theme}>
            <Box
                m={"0"}
                p={"0"}
                w={"100%"}
                minHeight={"100vh"}
                display={"flex"}
                flexDirection={"column"}
            >
                <Component {...pageProps} />
            </Box>

        </ChakraProvider>
    )
}
