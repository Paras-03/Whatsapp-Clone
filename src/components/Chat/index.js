import React from 'react';
import { VStack } from '@chakra-ui/react';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import MessageInput from './MessageInput';

function Chat() {
  return (
    <VStack h="100%" spacing={0}>
      <ChatHeader />
      <Messages />
      <MessageInput />
    </VStack>
  );
}

export default Chat;