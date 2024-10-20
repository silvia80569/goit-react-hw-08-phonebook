import React, { useEffect, useState } from 'react';
import { Box, Heading, Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectorContacts';
import {
  addContact,
  fetchContacts,
  deleteContact,
} from '../redux/contacts/operationsContacts';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const [newContact, setNewContact] = useState({ name: '', number: '' });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = () => {
    dispatch(addContact(newContact));
    setNewContact({ name: '', number: '' });
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

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
      <Box mb={6}>
        <Input
          placeholder="Name"
          value={newContact.name}
          onChange={e => setNewContact({ ...newContact, name: e.target.value })}
          mb={2}
        />
        <Input
          placeholder="Number"
          value={newContact.number}
          onChange={e =>
            setNewContact({ ...newContact, number: e.target.value })
          }
          mb={2}
        />
        <Button onClick={handleAddContact} colorScheme="blue">
          Add Contact
        </Button>
      </Box>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              onClick={() => handleDeleteContact(contact.id)}
              ml={4}
              colorScheme="red"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ContactsPage;
