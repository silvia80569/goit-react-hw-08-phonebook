import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { logoutUser } from '../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from '../redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box display="flex" alignItems="center">
      {isAuthenticated ? (
        <>
          <Text mr={4}>Welcome {user?.name || 'User'}!</Text>
          <Button onClick={handleLogout} aria-label="Logout">
            Logout
          </Button>
        </>
      ) : (
        <Text mr={4}>You are not logged in</Text>
      )}
    </Box>
  );
};

export default UserMenu;
