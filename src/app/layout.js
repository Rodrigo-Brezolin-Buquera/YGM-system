import { Box } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import ChakraUiProvider from '../provider/chakra-ui.provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yoga Mangala',
  description: 'Studio Yoga Mangala"',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraUiProvider>
          <Box
            m={"0"}
            p={"0"}
            w={"100%"}
            minHeight={"100vh"}
            display={"flex"}
            flexDirection={"column"}
          >
            {children}
          </Box>
        </ChakraUiProvider>
      </body>
    </html>
  )
}
