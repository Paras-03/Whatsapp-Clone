import React from 'react';
import { Flex, IconButton, Box, Heading } from '@chakra-ui/react';
import { FiMoreVertical, FiMessageSquare} from 'react-icons/fi';

function Header() {
  return (
    <Box>
      <Flex p={4} bg="rgb(14,21,25)" justify="space-between" align="center" w="100%">
        <Heading size={"lg"} fontWeight={"bold"}>Chats</Heading>
        <Flex>
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<FiMessageSquare />}
            aria-label="New Chat"
            mr={2}
            size={"lg"}
          />
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<FiMoreVertical />}
            aria-label="More options"
            size={"lg"}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;