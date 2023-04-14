import React,{Component} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from "./App.module.css";
import Form from "./Form/Form";


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
 
  formSubmitHandler=(newContact)=>{
console.log(newContact);
this.setState((state)=>({
 contacts: [...state.contacts, newContact]
}));
console.log(this.state.contacts);
  }

	
  render(){
    const{contacts}=this.state;
    // const {contacts: {name, number}}=this.state;
      return (
    <div
      style={{
        // height: '100vh',
        padding: 30,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101'
      }}
    > 
    <h2 className="title">Phonebook</h2>

    <Form onSubmit={this.formSubmitHandler}/>
     
    <h2 className="title">Contacts</h2>
       
       <ul className="contacts">
        {contacts.map((contact)=>(
       <li className="contact_item" key={contact.id}>{contact.name}: {contact.number}</li>
))}
       </ul>

    </div>
  );
  }

};
export default App;