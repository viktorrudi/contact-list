import React, { useState, useContext, useEffect } from 'react'
import { ContactContext } from '../../ContactContext'
import { emptyInputKeys } from '../../../utils'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './CreateContact.scss'

export default function CreateContact() {
  const [newContactInfo, setNewContactInfo] = useState(emptyInputKeys)
  const [showAllNewInfo, setShowAllNewInfo] = useState(false)
  const [error, setError] = useState({})
  const { addContact } = useContext(ContactContext)

  const handleSubmit = e => {
    e.preventDefault()

    const { success, message } = addContact(newContactInfo)
    // If validation fails
    if (!success) {
      setError({ message })
    } else {
      setError({})
      setNewContactInfo(emptyInputKeys)
    }
  }

  useEffect(() => {
    if (newContactInfo.firstName && newContactInfo.surname) {
      setError({})
    }
  }, [newContactInfo])

  const createContact = 'CreateContact'
  return (
    <div className={createContact}>
      <div className={`${createContact}__error`}>
        {error.message ? error.message : null}
      </div>

      <form onSubmit={handleSubmit}>
        <div className={`${createContact}__name`}>
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
        </div>
        <input onClick={handleSubmit} type="submit" value="Save" />
        <span
          className="dropdown-toggle"
          onClick={() => setShowAllNewInfo(!showAllNewInfo)}
        >
          {showAllNewInfo ? <FaChevronUp /> : <FaChevronDown />}
        </span>

        {/* Hidden add contact details */}
        <div
          className={`${createContact}__extra ${
            showAllNewInfo ? 'visible' : 'hidden'
          }`}
        >
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
