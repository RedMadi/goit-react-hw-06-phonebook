import { ContactListItem } from 'components/ContactItem/ContactItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContactsList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul>
        {filteredContactsList.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default ContactsList;
