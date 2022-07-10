import React, { Component } from 'react';
import PhoneBook from './PhoneBook';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  dataHandler = data => {
    const newId = nanoid();
    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (names.includes(data.name.toLowerCase())) {
      alert(`Please, enter unique name. ${data.name} is already exist`);
      return;
    } else {
      this.setState(prev => {
        return {
          contacts: [...prev.contacts, { id: newId, ...data }],
        };
      });
    }
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <PhoneBook
        contacts={contacts}
        title={'Phonebook'}
        filter={filter}
        onSubmit={this.dataHandler}
        onFilter={this.handleFilter}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default App;
