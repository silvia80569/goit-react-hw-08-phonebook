import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectIsLoading } from '../redux/auth/authSelectors';
import { loginUser } from 'components/redux/auth/authOperations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="password" mb="4">
            <FormLabel>Password:</FormLabel>
            <Input
              type={password}
              placeholder="Enter your password"
              value="password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default LoginPage;
