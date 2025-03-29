import React from 'react';
import { VStack } from '@chakra-ui/react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';

function Chat() {
  return (
    <VStack h="100%" spacing={0}>
      <ChatHeader />
      <ChatMessages />
      <MessageInput />
    </VStack>
  );
}

export default Chat;