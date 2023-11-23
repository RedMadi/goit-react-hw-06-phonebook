import React, { useState } from 'react';
import { FormContainer } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const contactName = name.toLowerCase();

    if (!/^[0-9-]+$/.test(number)) {
      alert('Please enter a valid numeric phone number.');
      return;
    }
    if (contacts.some(contact => contact.name.toLowerCase() === contactName)) {
      alert(`Contact with the name ${name} already exists in the phonebook.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          required
        />
        <label>Number</label>
        <input
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          required
        />
        <button type="submit">Add contact</button>
      </FormContainer>
    </div>
  );
};

export default Form;
