import React, { useState, useContext } from 'react'
import { ContactContext } from '../../ContactContext'
import { emptyInputKeys } from '../../../utils'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './CreateContact.scss'

export default function CreateContact() {
  const [newContactInfo, setNewContactInfo] = useState(emptyInputKeys)
  const [showAllNewInfo, setShowAllNewInfo] = useState(false)
  const { addContact, setNotification } = useContext(ContactContext)

  const handleSubmit = e => {
    e.preventDefault()
    const { success, message } = addContact(newContactInfo)
    // If validation fails
    if (!success) {
      setNotification('error', message)
    } else {
      setNotification('success', message)
      setNewContactInfo(emptyInputKeys)
    }
  }

  const createContact = 'CreateContact'
  return (
    <div className={createContact}>
      <form onSubmit={handleSubmit}>
        <div className={`${createContact}__main`}>
          <input
            value={newContactInfo.firstName}
            placeholder="first name"
            onChange={e =>
              setNewContactInfo({
                ...newContactInfo,
                firstName: e.target.value,
              })
            }
            type="text"
          />
          <input
            value={newContactInfo.surname}
            placeholder="surname"
            onChange={e =>
              setNewContactInfo({ ...newContactInfo, surname: e.target.value })
            }
            type="text"
          />
          <span
            className="dropdown-toggle"
            onClick={() => setShowAllNewInfo(!showAllNewInfo)}
          >
            {showAllNewInfo ? <FaChevronUp /> : <FaChevronDown />}
          </span>

          <button onClick={handleSubmit} type="submit">
            Save new contact
          </button>
        </div>

        {/* Hidden add contact details */}
        <div
          className={`${createContact}__extra ${
            showAllNewInfo ? 'visible' : 'hidden'
          }`}
        >
          <h3>Additional contact information</h3>
          <div className={`${createContact}__extra--general`}>
            <input
              value={newContactInfo.email}
              placeholder="email"
              type="email"
              onChange={e =>
                setNewContactInfo({ ...newContactInfo, email: e.target.value })
              }
            />
            <input
              value={newContactInfo.phone}
              placeholder="phone"
              type="tel"
              onChange={e =>
                setNewContactInfo({ ...newContactInfo, phone: e.target.value })
              }
            />
          </div>

          <div className={`${createContact}__extra--address`}>
            <input
              value={newContactInfo.city}
              placeholder="city"
              type="text"
              onChange={e =>
                setNewContactInfo({ ...newContactInfo, city: e.target.value })
              }
            />
            <input
              value={newContactInfo.zip}
              placeholder="zip"
              type="text"
              onChange={e =>
                setNewContactInfo({ ...newContactInfo, zip: e.target.value })
              }
            />
            <input
              value={newContactInfo.street}
              placeholder="street"
              type="text"
              onChange={e =>
                setNewContactInfo({ ...newContactInfo, street: e.target.value })
              }
            />
            <input
              value={newContactInfo.region}
              placeholder="region"
              type="text"
              onChange={e =>
                setNewContactInfo({ ...newContactInfo, region: e.target.value })
              }
            />
          </div>
        </div>
      </form>
    </div>
  )
}
