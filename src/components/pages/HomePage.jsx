import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Welcome to Contact Book
      </Heading>
      <Text fontSize="lg" mb={6}>
        Keep your contacts organized and easily accessible. Register today to
        start managing your contacts efficiently!
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        Main Features
      </Heading>
      <List spacing={3} mb={6}>
        <ListItem>Secure contact storage</ListItem>
        <ListItem>Fast and easy contact management</ListItem>
        <ListItem>Private contacts collection</ListItem>
        <ListItem>Fully protected with user authentication</ListItem>
      </List>

      <Box>
        <Text mb={3}>
          If you already have an account,{' '}
          <ChakraLink as={Link} to="/login" color="teal.500">
            login
          </ChakraLink>
          .
        </Text>
        <Text mb={3}>
          New here?{' '}
          <ChakraLink as={Link} to="/register" color="teal.500">
            Register
          </ChakraLink>{' '}
          to create an account.
        </Text>
        <Button as={Link} to="/contacts" colorScheme="teal" size="lg">
          Go to Contacts
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
