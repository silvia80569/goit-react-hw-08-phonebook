import {
  Box,
  FormControl,
  Button,
  Input,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/authOperations';
const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      await dispatch(registerUser({ name, email, password })).unwrap();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <FormControl mb={3}>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your email"
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
          <Button type="submit" colorScheme="teal" mt={4}>
            Register
          </Button>
        </form>
      </Box>
    </>
  );
};
export default Register;
