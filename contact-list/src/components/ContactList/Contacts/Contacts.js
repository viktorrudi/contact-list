import React, { useContext } from 'react'
import { ContactContext } from '../../ContactContext'
import Contact from './Contact'

export default function ContactList() {
  const { contacts, setOpenContact } = useContext(ContactContext)

  const contactList = 'ContactList'
  return (
    <>
      <div className={contactList}>
        {!contacts.length ? (
          <p className={`${contactList}__no-contacts`}>
            Add your first contact
          </p>
        ) : null}

        {contacts
          .sort((a, b) => {
            return a.firstName > b.firstName ? 1 : -1
          })
          .map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              setOpenContact={setOpenContact}
            />
          ))}
      </div>
    </>
  )
}
