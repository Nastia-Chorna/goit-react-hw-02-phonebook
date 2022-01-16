import React  from 'react';
import {
  Item, Button

} from "./ContactList.styled";

const ContacsItem = () => {
  return (
    <div>
      {({ filter, contacts, onDeleteName }) => {
        const normalazedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalazedFilter)
        );
        return visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name} : {number}
            </p>
            <Button type="button" onClick={() => onDeleteName(id)}>
              Delete
            </Button>
          </Item>
        ));
      }}
    </div>
  );
};

export default ContacsItem;
