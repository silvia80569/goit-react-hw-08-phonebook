import { Box, FormControl, Button, Input, FormLabel } from '@chakra-ui/react';

const RegisterPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <FormControl mb={3}>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              value="Name"
              //onChange={e => setName(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              //value={email}
              // onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              //value={password}
              //onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </FormControl>
          {/* {error && <Text color="red.500">{error}</Text>}*/}
          <Button type="submit" colorScheme="teal" mt={4}>
            Register
          </Button>
        </form>
      </Box>
    </>
  );
};
export default RegisterPage;
