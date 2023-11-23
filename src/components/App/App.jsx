import React from 'react';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
export default App;
