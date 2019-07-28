import React, { useState, useEffect, useContext } from 'react'
import { ContactContext } from '../../../../ContactContext'
import { FaTimes } from 'react-icons/fa'
import Inputs from './Inputs/Inputs'
import './ContactOptions.scss'

export default function ContactOptions() {
  const {
    openContact,
    updateContact,
    deleteContact,
    closeContactView,
    setNotification,
  } = useContext(ContactContext)
  const [updatedContact, setUpdatedContact] = useState(openContact)

  useEffect(() => {
    setUpdatedContact(openContact)
  }, [openContact])

  const handleDelete = e => {
    e.preventDefault()

    const { message } = deleteContact(openContact.id)
    // Will allways succeed, so not checking
    setNotification('success', message)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Attempting to update contact
    const { success, message } = updateContact(
      updatedContact.id,
      updatedContact
    )
    // Validates input
    if (!success) return setNotification('error', message)
    return setNotification('success', message)
  }

  const contactOptions = 'ContactOptions'
  return (
    <form onSubmit={handleSubmit} className={contactOptions}>
      <div className="btn close" onClick={() => closeContactView()}>
        <FaTimes />
      </div>

      <Inputs
        updatedContact={updatedContact}
        setUpdatedContact={setUpdatedContact}
      />

      <button className="btn green" type="submit">
        Update contact
      </button>

      <button className="btn red" onClick={handleDelete}>
        Delete contact
      </button>
    </form>
  )
}
