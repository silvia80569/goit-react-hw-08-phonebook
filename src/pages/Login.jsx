import React, { useState } from 'react';
import { Box, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/auth/authOperations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box maxWidth="400px" mx="auto" mt="20">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password:</FormLabel>
          <Input
            type="password"
            id="password-input"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};
export default Login;
