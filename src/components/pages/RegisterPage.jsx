import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Button,
  Input,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/auth/authOperations';
import { selectAuthError, selectIsLoading } from '../redux/auth/authSelectors';
import UserMenu from 'components/usermenu/UserMenu';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const userData = { name, email, password };
    console.log('Submitting user data:', userData);
    dispatch(registerUser(userData));
  };
  return (
    <>
      <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <FormControl mb={3}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="teal" mt={4} isLoading={isLoading}>
            Register
          </Button>
        </form>
      </Box>
      <UserMenu />
    </>
  );
};
export default RegisterPage;
