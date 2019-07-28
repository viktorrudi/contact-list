import React, { Component, createContext } from 'react'
import contactsDB from '../database/contacts.json'
import { formValidation } from '../utils'

export const ContactContext = createContext()

class ContactProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Properties
      contacts: contactsDB,
      openContact: {},
      notification: '',
      showNotification: false,

      // Methods
      setNotification: this.setNotification,
      setOpenContact: this.setOpenContact,
      addContact: this.addContact,
      deleteContact: this.deleteContact,
      closeContactView: this.closeContactView,
      updateContact: this.updateContact,
      setShowNotification: this.setShowNotification,
    }
  }

  deleteContact = contactID => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact.id !== contactID
      )
      return (prevState.contacts = updatedContacts)
    })
    this.closeContactView()
    return { success: true, message: 'Contact deleted' }
  }

  updateContact = (contactID, updatedContact) => {
    const check = formValidation(updatedContact)
    if (check.success) {
      this.setState(prevState => {
        return prevState.contacts.map(contact => {
          if (contact.id === contactID) {
            Object.assign(contact, updatedContact)
          }
          return true
        })
      })
      return { success: true, message: 'Contact updated' }
    } else {
      return { success: false, message: check.message }
    }
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
      return { success: true, message: 'Contact created' }
    }
    return { success: false, message: check.message }
  }

  closeContactView = () => {
    this.setState({ openContact: {} })
  }

  setShowNotification = status => {
    this.setState({ showNotification: status })
  }

  setNotification = (type, message) => {
    this.setState({ showNotification: true, notification: { type, message } })
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
