import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from 'components/Filter';

import {
  Contacts,
  List,
  ListTitle,
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
  Marker,
} from './ContactsList.styled';

class ContactsList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
    onFilter: PropTypes.func,
    onDelete: PropTypes.func,
  };

  render() {
    const { contacts, title, filter, onFilter, onDelete } = this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <Contacts>
        <ListTitle>{title}</ListTitle>
        <Filter filter={filter} onFilter={onFilter} />

        <List>
          {filteredContacts.map(contact => (
            <Contact key={contact.id}>
              <Marker>&#9742; </Marker>
              <ContactName>{contact.name}: </ContactName>
              <ContactNumber>{contact.number}</ContactNumber>
              <DeleteButton
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                x Delete
              </DeleteButton>
            </Contact>
          ))}
        </List>
      </Contacts>
    );
  }
}
export default ContactsList;
