import React from 'react';
import { VStack, IconButton, Avatar, Circle, Box } from '@chakra-ui/react';
import { FiMessageSquare, FiUsers, FiSettings } from 'react-icons/fi';
import { TbCircleDashed } from 'react-icons/tb';

function VerticalNav() {
  return (
    <VStack
      h="100vh"
      bg="rgb(24, 33, 38)"
      w="70px"
      py={4}
      spacing={4}
      align="center"
      justify="space-between"
    >
      <VStack spacing={6}>
        <Box position="relative" cursor="pointer">
          <IconButton
            variant="ghost"
            icon={<FiMessageSquare size={22} />}
            aria-label="Chats"
            color="whatsapp.500"
            _hover={{ bg: 'dark.300' }}
            size="lg"
          />
          <Circle
            size="24px"
            bg="whatsapp.500"
            position="absolute"
            top="-2"
            right="-2"
            color="white"
            fontSize="xs"
            fontWeight="bold"
          >
            42
          </Circle>
        </Box>
        <IconButton
          variant="ghost"
          icon={<TbCircleDashed size={22} />}
          aria-label="Status"
          color="gray.500"
          _hover={{ bg: 'dark.300' }}
          size="lg"
        />
        <IconButton
          variant="ghost"
          icon={<FiUsers size={22} />}
          aria-label="Communities"
          color="gray.500"
          _hover={{ bg: 'dark.300' }}
          size="lg"
        />
      </VStack>
      <VStack spacing={6}>
        <IconButton
          variant="ghost"
          icon={<FiSettings size={22} />}
          aria-label="Settings"
          color="gray.500"
          _hover={{ bg: 'dark.300' }}
          size="lg"
        />
        <Avatar 
          size="sm" 
          name="User" 
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
        />
      </VStack>
    </VStack>
  );
}

export default VerticalNav;