import { Component } from 'react';
import { nanoid } from 'nanoid'
import {  InputField, Label, Name,  Input, User } from './App.styled';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name } = this.state;
    this.setState({ state: contacts.push([name])});
  };
 
  AddContactPhoneBook = () => {
    return (
        this.state.contacts.map(contact => (<User key={nanoid(3)}>{contact}</User>))
    );
  };

  render () {
    const AddContactPhoneBook = this.AddContactPhoneBook();
    return (
      <section>
        <h1>Phonebook</h1>
          
        <InputField> 
          <Label>
            <Name>Name</Name>

            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, 
              Charles de Batz de Castelmore d'Artagnan"
              required/>

            <button type='submit' name='Contact' onClick={this.handleSubmit}>Add contact</button>
          </Label>
        </InputField> 
          
        <div>
          <h2>Contacts</h2>
          <ul>
            
            {AddContactPhoneBook}
          </ul>
        </div>
  
          
      </section>
         )
    }
}
    
   


