import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { Form, Label, Input, SubButton } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target[0].value;
    const number = evt.target[1].value;
    if (contacts.filter(contact => contact.name === name).length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    dispatch(addContact(name, number));
    evt.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Type name"
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Type number"
        />
      </Label>
      <SubButton type="submit">Add contact</SubButton>
    </Form>
  );
};

export default ContactForm;
