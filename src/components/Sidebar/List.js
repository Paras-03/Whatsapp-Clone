import React, { useState } from 'react';
import { VStack, Box, Avatar, Text, Flex, Circle, Input, HStack, Button } from '@chakra-ui/react';
import { FiArchive, FiSearch } from 'react-icons/fi';

const chats = [
  {
    id: 1,
    name: "SAVED MESSAGES",
    lastMessage: "You: Meeting notes from today",
    timestamp: "12:30 PM",
    isArchived: false,
    avatar: "https://bit.ly/sage-adebayo"
  },
  {
    id: 2,
    name: "Project Team",
    lastMessage: "Alice: Let's review the updates",
    timestamp: "11:45 AM",
    isArchived: false,
    avatar: null
  },
  {
    id: 3,
    name: "Tech Updates",
    lastMessage: "New features released for React 19...",
    timestamp: "10:15 AM",
    isArchived: false,
    avatar: null
  },
  {
    id: 4,
    name: "Family Group",
    lastMessage: "Mom: Don't forget dinner tonight!",
    timestamp: "Yesterday",
    isArchived: false,
    avatar: null
  },
  {
    id: 5,
    name: "John Smith",
    lastMessage: "See you at the conference",
    timestamp: "Yesterday",
    unreadCount: 3,
    isArchived: false,
    avatar: "https://bit.ly/dan-abramov"
  },
  {
    id: 6,
    name: "Design Team",
    lastMessage: "Sarah shared a file: UI_mockups.fig",
    timestamp: "Yesterday",
    unreadCount: 5,
    isArchived: false,
    avatar: null
  },
  {
    id: 7,
    name: "Coffee Club ☕",
    lastMessage: "Tom: Who's up for morning coffee?",
    timestamp: "9:20 AM",
    isArchived: false,
    avatar: null
  },
  {
    id: 8,
    name: "Family Group",
    lastMessage: "Mom: Don't forget dinner tonight!",
    timestamp: "Yesterday",
    isArchived: false,
    avatar: null
  },
  {
    id: 9,
    name: "John Smith",
    lastMessage: "See you at the conference",
    timestamp: "Yesterday",
    unreadCount: 3,
    isArchived: false,
    avatar: "https://bit.ly/dan-abramov"
  },
  {
    id: 10,
    name: "Design Team",
    lastMessage: "Sarah shared a file: UI_mockups.fig",
    timestamp: "Yesterday",
    unreadCount: 5,
    isArchived: false,
    avatar: null
  },
  {
    id: 11,
    name: "Coffee Club ☕",
    lastMessage: "Tom: Who's up for morning coffee?",
    timestamp: "9:20 AM",
    isArchived: false,
    avatar: null
  }
];

function List() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <VStack 
      spacing={0} 
      w="100%" 
      h="calc(100vh - 70px)"
      bg="dark.200"
    >
      <Box w="100%" p={2} bg="rgb(14,21,25)">
        <Box 
          bg="dark.300" 
          borderRadius="lg" 
          p={2} 
          mb={3}
        >
          <Flex align="center">
            <FiSearch color="gray.400" />
            <Input
              placeholder="Search"
              variant="unstyled"
              ml={2}
              color="gray.100"
              _placeholder={{ color: 'gray.500' }}
            />
          </Flex>
        </Box>

        <HStack spacing={2} pb={2}>
          <Button
            size="sm"
            bg={activeFilter === 'All' ? 'whatsapp.500' : 'dark.300'}
            color={activeFilter === 'All' ? 'white' : 'gray.400'}
            _hover={{ bg: activeFilter === 'All' ? 'whatsapp.600' : 'dark.400' }}
            onClick={() => setActiveFilter('All')}
            borderRadius="full"
          >
            All
          </Button>
          <Button
            size="sm"
            bg={activeFilter === 'Unread' ? 'whatsapp.500' : 'dark.300'}
            color={activeFilter === 'Unread' ? 'white' : 'gray.400'}
            _hover={{ bg: activeFilter === 'Unread' ? 'whatsapp.600' : 'dark.400' }}
            onClick={() => setActiveFilter('Unread')}
            borderRadius="full"
          >
            Unread
          </Button>
          <Button
            size="sm"
            bg={activeFilter === 'Favourites' ? 'whatsapp.500' : 'dark.300'}
            color={activeFilter === 'Favourites' ? 'white' : 'gray.400'}
            _hover={{ bg: activeFilter === 'Favourites' ? 'whatsapp.600' : 'dark.400' }}
            onClick={() => setActiveFilter('Favourites')}
            borderRadius="full"
          >
            Favourites
          </Button>
          <Button
            size="sm"
            bg={activeFilter === 'Groups' ? 'whatsapp.500' : 'dark.300'}
            color={activeFilter === 'Groups' ? 'white' : 'gray.400'}
            _hover={{ bg: activeFilter === 'Groups' ? 'whatsapp.600' : 'dark.400' }}
            onClick={() => setActiveFilter('Groups')}
            borderRadius="full"
          >
            Groups
          </Button>
        </HStack>
      </Box>

      <Box w="100%">
        <Flex
          p={3}
          w="100%"
          align="center"
          color="gray.400"
          borderBottom="1px"
          borderColor="dark.300"
          cursor="pointer"
          _hover={{ bg: 'dark.300' }}
        >
          <Box 
            p={2} 
            borderRadius="md" 
            bg="dark.300"
          >
            <FiArchive size={18} />
          </Box>
          <Text ml={3}>Archived</Text>
        </Flex>
      </Box>

      <Box 
        w="100%" 
        overflowY="auto" 
        flex={1}
        css={{
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#374045',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#4A545C',
          }
        }}
      >
        {chats.map((chat) => (
          <Box
            key={chat.id}
            w="100%"
            p={3}
            cursor="pointer"
            _hover={{ bg: 'dark.300' }}
            borderBottom="1px"
            borderColor="dark.300"
          >
            <Flex align="center">
              <Avatar 
                size="md" 
                name={chat.name}
                src={chat.avatar}
                bg="gray.600"
                mr={3}
              />
              <Box flex={1} pr={2}>
                <Flex justify="space-between" align="center" mb={1}>
                  <Text color="gray.100" fontWeight="medium">
                    {chat.name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {chat.timestamp}
                  </Text>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="gray.500" noOfLines={1}>
                    {chat.lastMessage}
                  </Text>
                  {chat.unreadCount && (
                    <Circle
                      size="20px"
                      bg="whatsapp.500"
                      color="white"
                      fontSize="xs"
                    >
                      {chat.unreadCount}
                    </Circle>
                  )}
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </VStack>
  );
}

export default List;