import { useState, useEffect } from 'react';
import Section from './Section/Section.jsx';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';

const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

const App = () => {
  const [contacts, setContacts] = useState(() => localStorageContacts ?? []);
  const [filter, setFilter] = useState('');

  const normalizedFilter = filter.toLowerCase();

  const handleRepeat = contact => {
    const newContact = {
      id: contact.id,
      name: contact.name,
      number: contact.number,
    };
    let arr = [];
    arr = contacts.map(cur => cur.name);
    if (arr.includes(contact.name)) {
      return alert(`${contact.name} is arleady in contacts`);
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  //Delete contact
  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  //Updating local storage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <Section title="Phonebook">
      <ContactForm onSubmit={handleRepeat} />

      <ContactList contacts={filteredContact} handleDelete={handleDelete}>
        <Filter filter={filter} handleFilter={handleFilter} />
      </ContactList>
    </Section>
  );
};
export default App;
