import React, { useState } from 'react';
import { Flex, Input, IconButton, Box } from '@chakra-ui/react';
import { FiSmile, FiPlus, FiMic } from 'react-icons/fi';

function MessageInput() {
  const [message, setMessage] = useState('');

  return (
    <Box w="100%" bg="rgb(24, 33, 38)">
      <Flex 
        p={2} 
        align="center" 
        maxW="100%"
        mx="auto"
      >
        <IconButton
          variant="ghost"
          color="gray.200"
          icon={<FiPlus />}
          aria-label="Add attachment"
          size="md"
          _hover={{
            bg: 'dark.300',
            color: 'gray.200'
          }}
        />
        <Box
          flex={1}
          mx={2}
          bg="dark.100"
          borderRadius="full"
          display="flex"
          alignItems="center"
          px={3}
          py={1}
        >
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<FiSmile />}
            aria-label="Add emoji"
            size="md"
            mr={1}
            _hover={{
              bg: 'dark.300',
              color: 'gray.400'
            }}
          />
          <Input
            placeholder="Type a message"
            variant="unstyled"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            _placeholder={{ color: 'gray.500' }}
            h="32px"
          />
        </Box>
        <IconButton
          variant="ghost"
          color="gray.400"
          icon={<FiMic />}
          aria-label="Voice message"
          size="md"
          _hover={{
            bg: 'dark.300',
            color: 'gray.400'
          }}
        />
      </Flex>
    </Box>
  );
}

export default MessageInput;