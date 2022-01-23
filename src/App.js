import React, { Component } from 'react';
import Form from './components/ContactForm/ContactForm';
import shortid from 'shortid';
import Filter from "./components/filter/Filter";
import ContactList from './components/ContactList/ContactList';


class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  addContact = ({name, number}) => {
    const {contacts} = this.state;
    const newCard = {id: shortid.generate(), name, number}
    const searchCard = contacts.find(contact => contact.name === newCard.name)
    if (searchCard) {
      alert(`${name} is already in the contacts`);
      return;
    } else {
      this.setState(({contacts}) => ({
        contacts: [newCard, ...contacts],
      }))
    }
    
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state.name);
    this.setState({name: ''})
};

  getSubmitForm = ({ name, number }) => {
    const normalazedFind = name.toLowerCase();

    const isName = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === normalazedFind
    );
    if (isName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState((prevstate) => ({
      contacts: [{ name, number, id: shortid(5) }, ...prevstate.contacts],
    }));
  };

  deleteName = (id) => {
    this.setState((prevstate) => ({
      contacts: prevstate.contacts.filter((contact) => contact.id !== id),
    }));
  };
  getVisibleContacts = () => {
  const { filter, contacts} = this.state
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter)
    )
}

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
   
        <div>
          <h2>Phonebook</h2>
          <Form onSubmit={this.addContact} />
          <h2>Contacts</h2>
 
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          <ContactList 
          contacts={visibleContacts}
          onDeleteName={this.deleteName}
          />
</div>
//  </div>
    );
  }
}

export default App;

