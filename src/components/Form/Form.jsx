import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ContactForm,
  FormLabel,
  LabelTitle,
  FormInput,
  AddButton,
} from './Form.styled';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <ContactForm
        name="addContactForm"
        autocomplete="on"
        onSubmit={this.handleSubmit}
      >
        <FormLabel>
          <LabelTitle>Name</LabelTitle>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInput}
            value={this.state.name}
            required
          />
        </FormLabel>

        <FormLabel>
          <LabelTitle>Number</LabelTitle>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleInput}
            value={this.state.number}
            // minlength="7"
            // maxlength="7"
            required
          />
        </FormLabel>

        <AddButton type="submit">+ Add to contacts</AddButton>
      </ContactForm>
    );
  }
}
export default Form;
