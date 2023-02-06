import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from '../ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
 
  handleFormOnSubmit = data => {
    console.log(data);
    const { contacts} = this.state;
    const { name, number } = data;
    const id = nanoid(3);
    const alertReplayNameUser = contacts.some((el) => (el.name === name));
    // const alertReplayNameUser = contacts.map(contact => contact.name).includes(name);
    
    alertReplayNameUser === true ? alert (`${name} is already in contacts.`) : 
    this.setState({state: contacts.push({id: id, name: name, number: number})});
  };

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({ [name]: value });
  };

  render () {
    const handleFormOnSubmit = this.handleFormOnSubmit;
    const handleChange = this.handleChange;
    
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={handleFormOnSubmit}/>
        <div>
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} onChange={handleChange}/>
          <ul>
            <ContactList  contactsData={this.state}/>
          </ul>
        </div>          
      </section>
         )
    };
};
    
   

