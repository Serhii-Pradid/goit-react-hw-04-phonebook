import { useEffect, useState } from "react";
import Form from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import  { Filter }  from "./Filter/Filter";
import shortid from "shortid";
import './App.module.css'

export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);  // початковий стан залежить від того, що є в ocalStorage або порожній масив
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))  // перерендується якщо щось змінюється в [contacts]
}, [contacts]);

    
  const addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`)
    }
    setContacts([newContact, ...contacts])
      };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    )
    //setFilter('');
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value)
  };

 const findContact = () => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
   };

   
  return (

  <section>

    <h1>Phonebook</h1>
    <Form onSubmit={addContact}/>
    <h1> Contacts </h1>
    <Filter value={filter} onChange={changeFilter}/>
        <ContactList 
    contacts={findContact()}
   onDeleteContact={deleteContact} />
   
  </section>
);
};

