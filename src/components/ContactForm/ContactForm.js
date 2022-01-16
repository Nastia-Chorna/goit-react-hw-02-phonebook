import React, { Component } from 'react';
import PropTypes from "prop-types";
import shortid from 'shortid';
import {
  Wrap,
  Label,
  Input,
  Button

} from "./ContactForm.styled";


class Form extends Component {
    state = { name: "", number: "" };
    
nameInputId = shortid.generate();
phoneInputId = shortid.generate();


  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Wrap onSubmit={this.handleSubmit}>
        <Label htmlFor="contact_name">Name</Label>
        <Input
          onChange={this.handleChange}
          id={this.nameInputId}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="contact_number">Number</Label>
        <Input
          onChange={this.handleChange}
          value={this.state.number}
          id={this.phoneInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit"> Add contact</Button>
      </Wrap>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};