import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/auth/authOperations';
import { Box, Button, Text } from '@chakra-ui/react';
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from '../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Box display="flex" alignItems="center">
      {user && <Text mr="4">{user.email}</Text>}
      <Button colorScheme="teal" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
