import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import './App.css';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const alreadyExist = contacts.find(({ name }) => name === newContact.name);

    if (alreadyExist)
      return alert(`${alreadyExist.name} is already in contacts`);

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedNames = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedNames)
    );
    return filteredContacts;
  };

  onDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <div className="App">
        <header className="App-header">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.handleInputChange} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            onDelete={this.onDeleteContact}
            contacts={visibleContacts}
          />
        </header>
      </div>
    );
  }
}

export default App;
