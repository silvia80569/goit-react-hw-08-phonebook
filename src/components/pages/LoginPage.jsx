import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div>
      <Box maxWidth="400px" mx="auto" mt="20">
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb="4">
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value="email"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="password" mb="4">
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              placeholder="Enter your email"
              value="password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default LoginPage;
