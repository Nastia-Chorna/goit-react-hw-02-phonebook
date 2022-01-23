import React from 'react';
// import ContactWrap from '../ContactWrap/ContactWrap';
import PropTypes from "prop-types";
import {
    List,
    Button
  
} from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteName }) => {
    return contacts.length === 0 ? (
        <p>The phonebook is empty</p>
    ) : (
    <List>        
        {contacts.map(({id, name, number}) => (
            <li key={id}>
               {name}: {number}
          <Button
            className="button"
            type="button"
            onClick={() => onDeleteName(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};
ContactList.propTypes= {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onDeleteName: PropTypes.func.isRequired
};
export default ContactList;
