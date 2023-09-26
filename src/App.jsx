import ContactForm from 'Components/ContactForm/ContactForm';
import { ContactIem } from 'Components/ContactItem/ContactItem';
import { ContactList } from 'Components/ContactList/ContactList';
import { Filter } from 'Components/Filter/Filter';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  getContact = data => {
    const { contacts } = this.state;
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.getContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilter} />
        <ContactList>
          <ContactIem
            contacts={visibleContact}
            onDeleteContact={this.handleDelete}
          />
        </ContactList>
      </div>
    );
  }
}
