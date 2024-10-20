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
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/auth/authSelectors';

const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
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
              style={({ isActive }) => ({
                color: isActive ? 'yellow.400' : 'white',
              })}
            >
              Home
            </ChakraLink>
          </ListItem>
          {!isAuthenticated && (
            <>
              <ListItem>
                <ChakraLink
                  as={NavLink}
                  to="register"
                  _hover={{ color: 'yellow.300' }}
                  style={({ isActive }) => ({
                    color: isActive ? 'yellow.400' : 'white',
                  })}
                >
                  Register
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink
                  as={NavLink}
                  to="login"
                  _hover={{ color: 'yellow.300' }}
                  style={({ isActive }) => ({
                    color: isActive ? 'yellow.400' : 'white',
                  })}
                >
                  Login
                </ChakraLink>
              </ListItem>
            </>
          )}
          {isAuthenticated && (
            <>
              <UserMenu />
              <ListItem>
                <ChakraLink
                  as={NavLink}
                  to="contacts"
                  _hover={{ color: 'yellow.300' }}
                  style={({ isActive }) => ({
                    color: isActive ? 'yellow.400' : 'white',
                  })}
                >
                  Contacts
                </ChakraLink>
              </ListItem>
            </>
          )}
        </Flex>
      </nav>
      <Divider mt={4} borderColor="whiteAlpha.800" />
    </Box>
  );
};

export default Navigation;
