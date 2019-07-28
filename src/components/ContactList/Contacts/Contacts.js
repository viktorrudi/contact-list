import React, { useContext } from 'react'
import { ContactContext } from '../../ContactContext'
import Contact from './Contact'
import './Contacts.scss'
import ContactView from './ContactView/ContactView'

export default function ContactList() {
  const { contacts, setOpenContact } = useContext(ContactContext)

  const contactsStyle = 'Contacts'
  return (
    <>
      <div className={contactsStyle}>
        {!contacts.length ? (
          <p className={`${contactsStyle}__no-contacts`}>
            Add your first contact
          </p>
        ) : null}

        <div className={`${contactsStyle}__wrapper`}>
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
        <ContactView />
      </div>
    </>
  )
}
