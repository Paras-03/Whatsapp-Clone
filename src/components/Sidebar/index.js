import React from 'react';
import { VStack } from '@chakra-ui/react';
import Header from './Header';
import SearchBar from './SearchBar';
import ChatList from './ChatList';

function Sidebar() {
  return (
    <VStack h="100%" spacing={0}>
      <Header />
      <SearchBar />
      <ChatList />
    </VStack>
  );
}

export default Sidebar;