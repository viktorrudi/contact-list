import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import contactsDB from '../database/contacts.json'
import { formValidation } from '../utils'

export const ContactContext = createContext()

class ContactProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: contactsDB,
      openContact: {},
      setOpenContact: this.setOpenContact,
      addContact: this.addContact,
      deleteContact: this.deleteContact,
      updateContact: this.updateContact,
    }
  }

  deleteContact = contactID => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact.id !== contactID
      )
      prevState.contacts = updatedContacts
      prevState.openContact = {}
      return prevState
    })
  }

  updateContact = (contactID, updatedContact) => {
    this.setState(prevState => {
      return prevState.contacts.map(contact => {
        if (contact.id === contactID) {
          Object.assign(contact, updatedContact)
        }
        return true
      })
    })
  }

  setOpenContact = contactID => {
    const [contactObject] = this.state.contacts.filter(
      contact => contact.id === contactID
    )
    this.setState({
      openContact: contactObject,
    })
  }

  addContact = contact => {
    contact.id = this.state.contacts.length + 1
    const check = formValidation(contact)
    if (check.success) {
      this.setState({ contacts: [...this.state.contacts, check.input] })
      return check
    } else {
      return check
    }
  }

  render() {
    return (
      <ContactContext.Provider value={this.state}>
        {this.props.children}
      </ContactContext.Provider>
    )
  }
}

export default ContactProvider
