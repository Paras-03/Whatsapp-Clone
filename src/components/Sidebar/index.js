import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import List from './List';

function Sidebar() {
  return (
    <Box h="100vh" bg="dark.100">
      <Header />
      <List />
    </Box>
  );
}

export default Sidebar;