import React, {Component} from "react";
import Form from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import  { Filter }  from "./Filter/Filter";
import shortid from "shortid";
import './App.module.css'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    };

     addContact = ({name, number}) => {
      const newContact = {
        id: shortid.generate(),
        name,
        number,
      }

      if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${name} is already in contacts`)
      }

      this.setState(prevState => 
        ({contacts: [newContact, ...prevState.contacts]})
        )
    };

    deleteContact = contactId => {
      this.setState(prevState => (
        {contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)}
      ))
    };

    changeFilter = event => {
      this.setState({filter: event.currentTarget.value})
    };

   findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));


     };

     componentDidMount() {
  const contacts = localStorage.getItem('contacts')      // берем з localStorage збережені дані контактів
  const parseContacts = JSON.parse(contacts)             // робимо з них масив
  
  console.log(parseContacts)

  if (parseContacts) {
    this.setState({contacts: parseContacts});            // і записуємо в state збережені дані із localStorage
}
  }
     
     componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts) {                         // порівнюємо попедедній та новий масиви і якщо вони не рівні 
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))   // то записуємо новий масив в localStorage
      }
     };

     
render() {
  const {filter} = this.state;
    
  return (

    <section>

      <h1>Phonebook</h1>
      <Form onSubmit={this.addContact}/> 
      <h1> Contacts </h1>

      <Filter value={filter} onChange={this.changeFilter}/>
     
      <ContactList 
      contacts={this.findContact()}
      onDeleteContact={this.deleteContact} />
     
    </section>
  );
}
};



