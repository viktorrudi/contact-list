import React from 'react'
import CreateContact from './CreateContact/CreateContact'
import ContactProvider from '../ContactContext'
import Contacts from './Contacts/Contacts'
import ContactView from './ContactView/ContactView'

export default function ContactList() {
  return (
    <ContactProvider>
      <CreateContact />
      <Contacts />
      <ContactView />
    </ContactProvider>
  )
}
