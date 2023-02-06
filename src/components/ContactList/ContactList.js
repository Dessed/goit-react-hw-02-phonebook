import { User } from '../App/App.styled';

export const ContactList = ({contactsData}) => {
    const {contacts, filter} = contactsData;
    const normalizedFilter = filter.toLowerCase();
    
    return (
        contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
        .map(contact => (<User key={contact.id}>{contact.name}: {contact.number}</User>))
    );
};
   