import React, { useContext } from 'react'
import { ContactContext } from '../../ContactContext'
import ContactOptions from './ContactOptions/ContactOptions'

export default function ContactView() {
  const { openContact, deleteContact } = useContext(ContactContext)

  const handleDelete = () => {
    deleteContact(openContact.id)
  }

  const contactView = 'ContactView'
  return (
    <>
      <div className={`${contactView} ${openContact.id ? 'open' : 'closed'}`}>
        <ContactOptions />
        <div onClick={handleDelete}>Delete</div>
      </div>
    </>
  )
}
