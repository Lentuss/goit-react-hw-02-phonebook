import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsList from 'components/ContactsList';
import Form from 'components/Form';
import { BookContainer, Title } from './PhoneBook.styled';

class PhoneBook extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    onFilter: PropTypes.func,
    onDelete: PropTypes.func,
  };

  render() {
    const { title, onSubmit, contacts, filter, onFilter, onDelete } =
      this.props;
    return (
      <BookContainer>
        <Title>{title}</Title>
        <Form onSubmit={onSubmit} />

        <ContactsList
          title={'Contacts'}
          contacts={contacts}
          filter={filter}
          onFilter={onFilter}
          onDelete={onDelete}
        />
      </BookContainer>
    );
  }
}

export default PhoneBook;
