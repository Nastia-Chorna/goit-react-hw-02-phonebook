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

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
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

  render() {
    return (
      <div
      value={{
          contacts: this.state.contacts,
          filter: this.state.filter,
          onDeleteName: this.deleteName,
        }}>
        <div>
          <h2>Phonebook</h2>
          <Form submitForm={this.getSubmitForm} />
          <p>Contacts</p>
 
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          <ContactList />
</div>
 </div>
    );
  }
}

export default App;
