import React from 'react';
import { ListStyled } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListStyled>
      <li>
        {contact.name}: {contact.number}
      </li>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </ListStyled>
  );
};
