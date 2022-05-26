import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React from 'react';
import theme from './constants/theme';
import Router from './routes/router';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
