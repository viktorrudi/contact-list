import React from 'react'
import CreateContact from './CreateContact/CreateContact'
import ContactProvider from '../ContactContext'
import Contacts from './Contacts/Contacts'
import UserNotification from '../UserNotification/UserNotification'

export default function ContactList() {
  return (
    <ContactProvider>
      <CreateContact />
      <Contacts />
      <UserNotification />
    </ContactProvider>
  )
}
