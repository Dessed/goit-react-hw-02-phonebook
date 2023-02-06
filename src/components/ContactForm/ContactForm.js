import { Component } from "react";
import { InputField, Label, Name,  Input } from '../App/App.styled';


export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({ [name]: value });
      };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        this.resetInputData();
      };

      resetInputData = () => {
        this.setState({
          name: '', 
          number: '',
        })
      }
    
    render () {
        const handleChange = this.handleChange;
        const handleSubmit = this.handleSubmit;
       
        return (
            <InputField onSubmit={handleSubmit}> 
                <Label>
                  <Name>Name</Name>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, 
                    Charles de Batz de Castelmore d'Artagnan"
                    required/>
        
                  <Name>Phone</Name>
                  <Input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                  <button type='submit' name='Contact'>Add contact</button>
                </Label>
            </InputField> 
        );
    };
};