import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import VerticalNav from './components/Sidebar/VerticalNav';

function App() {
  return (
    <Flex h="100vh" bg="dark.200">
      <VerticalNav />
      <Box flex={1}>
        <Flex h="100%">
          <Box w="350px" borderRight="1px" borderColor="dark.300">
            <Sidebar />
          </Box>
          <Box flex={1}>
            <Chat />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
