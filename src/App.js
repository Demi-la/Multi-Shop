import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './navbar/navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
     <Navbar/>
    </ChakraProvider>
  );
}

export default App;
