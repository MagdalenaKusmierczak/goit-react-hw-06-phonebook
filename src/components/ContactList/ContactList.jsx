import PropTypes from 'prop-types';
import {
  ContactsWrapper,
  ContactsTitle,
  ContactsList,
  ContactElement,
  DeleteBtn,
} from './ContactList.styled';
const ContactList = ({ contacts, handleDelete, children }) => {
  return (
    <ContactsWrapper>
      <ContactsTitle>Contacts</ContactsTitle>
      {children}
      <ContactsList>
        {contacts.map(contact => (
          <ContactElement key={contact.id} id={contact.id}>
            {contact.name}: {contact.number}
            <DeleteBtn id={contact.id} onClick={() => handleDelete(contact.id)}>
              Delete
            </DeleteBtn>
          </ContactElement>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};

ContactList.propTypes = {
  children: PropTypes.object.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ContactList;
