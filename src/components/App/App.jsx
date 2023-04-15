import React,{Component} from 'react';
import PropTypes from 'prop-types';
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import  Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

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
this.setState((state)=>({
 contacts: [...state.contacts, newContact]
}));
  }

  handleQueryFilter=(query)=>{
 
    this.setState({filter: query});
  
  }


	
  render(){
    const{contacts, filter}=this.state;
      return (
    <div
      style={{
        padding: 30,      
        color: '#010101'
      }}
    > 
    <h1 className="title">Phonebook</h1>

    <ContactForm onSubmit={this.formSubmitHandler}/>
     
    <h2 className="title">Contacts</h2>
       
      <Filter onQuery={this.handleQueryFilter} />

      <ContactList contacts={contacts} filter={filter} />       

    </div>
  );
  }

};
export default App;