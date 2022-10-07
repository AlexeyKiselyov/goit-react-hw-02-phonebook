import { Component } from "react"
import {nanoid} from 'nanoid';
import {Phonebook} from '../components/Phonebook/Phonebook';
import {ContactList} from '../components/ContactList/ContactList';
import {Filter} from '../components/Filter/Filter';
// ==============================
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  onAddContact=(newUser)=>{
    this.setState((prevState)=>({      
        contacts: [...prevState.contacts,{...newUser,id:nanoid()}]      
    }))
  }

  onChangeFilter =(e)=>{
    this.setState({
      filter:e.target.value
    })

  }

  render (){
    return(
    <>  
    <h2>Phonebook</h2> 
    <Phonebook onAddContact={this.onAddContact}/>
    <h2>Contacts</h2> 
    <Filter onChangeFilter={this.onChangeFilter}/>
    <ContactList contacts={this.state.contacts} filter={this.state.filter}/>
    </>
    )    
  }  
};
