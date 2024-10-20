import { NavLink } from 'react-router-dom';
import {
  Flex,
  Box,
  List,
  ListItem,
  Link as ChakraLink,
  Divider,
} from '@chakra-ui/react';
import UserMenu from '../usermenu/UserMenu';

const Navigation = () => {
  return (
    <Box as="nav" p={4} bg="teal.500">
      <Divider mb={4} borderColor="whiteAlpha.800" />
      <nav>
        <Flex
          as={List}
          justify="center"
          gap={6}
          color="white"
          fontWeight="bold"
        >
          <ListItem>
            <ChakraLink
              as={NavLink}
              to="/"
              _hover={{ color: 'yellow.300' }}
              _activeLink={{ color: 'yellow.400' }}
            >
              Home
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={NavLink}
              to="register"
              _hover={{ color: 'yellow.300' }}
              _activeLink={{ color: 'yellow.400' }}
            >
              Register
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={NavLink}
              to="login"
              _hover={{ color: 'yellow.300' }}
              _activeLink={{ color: 'yellow.400' }}
            >
              Login
            </ChakraLink>
          </ListItem>
          <UserMenu />
          <ListItem>
            <ChakraLink
              as={NavLink}
              to="contacts"
              _hover={{ color: 'yellow.300' }}
              _activeLink={{ color: 'yellow.400' }}
            >
              Contacts
            </ChakraLink>
          </ListItem>
        </Flex>
      </nav>
      <Divider mt={4} borderColor="whiteAlpha.800" />
    </Box>
  );
};

export default Navigation;
