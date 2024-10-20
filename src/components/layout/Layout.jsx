import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

function Layout() {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={4}>
        Phonbook
      </Heading>
      <Navigation />
      <Box as="main" my={6}>
        <Outlet />
      </Box>
      <Divider my={6} />
      <Box as="footer" textAlign="center" py={4}>
        <Text>&copy; 2024 Contact Book</Text>
      </Box>
    </Box>
  );
}

export default Layout;
