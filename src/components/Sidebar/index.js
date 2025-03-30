import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import ChatList from './ChatList';

function Sidebar() {
  return (
    <Box h="100vh" bg="dark.100">
      <Header />
      <ChatList />
    </Box>
  );
}

export default Sidebar;