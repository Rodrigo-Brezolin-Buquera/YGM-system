import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import Router from './routes/router';
import theme from './constants/theme';



function App() {
  return (
    <ChakraProvider theme={theme}  >  
        <Router />    
    </ChakraProvider>
  );
}

export default App;
