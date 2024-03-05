import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import {
  ContactsWrapper,
  ContactsTitle,
  ContactsList,
  ContactElement,
  DeleteBtn,
} from './ContactList.styled';

const ContactList = ({ children }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsWrapper>
      <ContactsTitle>Contacts</ContactsTitle>
      {children}
      <ContactsList>
        {contacts
          .filter(
            contact =>
              contact.name.toLowerCase().includes(filter) ||
              contact.number.includes(filter)
          )
          .map(contact => (
            <ContactElement key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteBtn
                id={contact.id}
                onClick={() => handleDelete(contact.id)}
              >
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
};
export default ContactList;
