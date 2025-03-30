import React from 'react';
import { Flex, Avatar, Box, Text, IconButton } from '@chakra-ui/react';
import { FiMoreVertical, FiSearch, FiVideo } from 'react-icons/fi';

function ChatHeader() {
  return (
    <Box w="100%" bg="rgb(24,33,38)">
      <Flex p={3} align="center" padding={2} ml={5}>
        <Avatar size="md" src="https://bit.ly/dan-abramov" mr={3} />
        <Box flex={1}>
          <Text fontSize="lg" fontWeight="bold">Saved Messages</Text>
          <Text fontSize="xs" color="gray.500">
            online
          </Text>
        </Box>
        <Flex>
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<FiVideo />}
            aria-label="Video call"
            mr={1}
            size="lg"
          />
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<FiSearch />}
            aria-label="Search"
            mr={1}
            size="lg"
          />
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<FiMoreVertical />}
            aria-label="More options"
            size="lg"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default ChatHeader;