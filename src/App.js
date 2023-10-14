import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import "@fontsource/raleway/400.css"
import Router from "./routes/router";

function App() {
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
        <Router />
      </Box>
    </ChakraProvider>
  );
}

export default App;
