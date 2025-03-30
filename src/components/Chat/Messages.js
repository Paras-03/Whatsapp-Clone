import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import { messages } from '../../data/mockData.js';

function Messages() {
    console.log(messages);
  return (
    <VStack
      flex={1}
      w="100%"
      spacing={4}
      p={4}
      overflowY="auto"
      bg="#0B141A"  // Darker background color
        backgroundRepeat="repeat"
        backgroundSize="contain"
    >
      {messages.map((message) => (
        <Box
          key={message.id}
          alignSelf={message.isSent ? 'flex-end' : 'flex-start'}
          bg={message.isSent ? 'whatsapp.500' : 'white'}
          color={message.isSent ? 'white' : 'black'}
          px={4}
          py={2}
          borderRadius="lg"
          maxW="70%"
          position="relative"
        >
          <Text>{message.text}</Text>
          <Text
            fontSize="xs"
            color={message.isSent ? 'whiteAlpha.800' : 'gray.500'}
            textAlign="right"
            mt={1}
          >
            {message.timestamp}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

export default Messages;