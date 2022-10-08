import { Component } from "react"
// ==============================
export class Phonebook extends Component {
  state = {    
    name: '',
    number:''
  }

  onInputChange=({target:{name,value}})=>{
    this.setState({
      [name]: value
    })
  }

  onFormSubmitAddContact = (e) =>{
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.onFormReset();
  }
  onFormReset =()=> {
    this.setState({
      name: '',
      number:''
    })
  }

  render (){
    const{name,number} = this.state;
    return(
    <>
    <form onSubmit={this.onFormSubmitAddContact}>
      <label>
        Name
      <input
        onChange={this.onInputChange}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </label>
      <label>
        Number
        <input  onChange={this.onInputChange} value={number} type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required placeholder="123-45-67"/>
      </label>
      <button type="submit">Add contact</button>
    </form>
    </>
    )    
  }  
};