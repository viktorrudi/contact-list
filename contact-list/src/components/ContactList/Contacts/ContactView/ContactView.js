import React, { useContext } from 'react'
import { ContactContext } from '../../../ContactContext'
import ContactOptions from './ContactOptions/ContactOptions'
import './ContactView.scss'

export default function ContactView() {
  const { openContact } = useContext(ContactContext)

  const contactView = 'ContactView'
  return (
    <div
      className={`${contactView} ${openContact.id >= 0 ? 'open' : 'closed'}`}
    >
      <ContactOptions />
    </div>
  )
}
