import React, { useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectorContacts';
import { fetchContacts } from '../redux/contacts/operationsContacts';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading contacts...</p>;
  }
  if (error) {
    return <p>Error loading contacts: {error}</p>;
  }

  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>
        Contacts
      </Heading>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
export default ContactsPage;
