import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <Flex h="100vh" bg="gray.100">
      <Box
        w="100%"
        maxW="1400px"
        m="auto"
        h="95vh"
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
      >
        <Flex h="100%">
          <Box w="30%" borderRight="1px" borderColor="gray.200">
            <Sidebar />
          </Box>
          <Box w="70%">
            <Chat />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
