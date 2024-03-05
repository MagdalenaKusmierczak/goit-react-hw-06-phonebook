import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts} from '../redux/selectors';

import Section from './Section/Section.jsx';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';

const App = () => {
 const contacts = useSelector(getContacts);
  //Updating local storage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <Section title="Phonebook">
      <ContactForm  />
      <ContactList>
        <Filter/>
      </ContactList>
    </Section>
  );
};
export default App;
