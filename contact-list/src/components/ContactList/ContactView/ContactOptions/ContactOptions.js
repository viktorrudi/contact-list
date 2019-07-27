import React, { useState, useEffect, useContext } from 'react'
import { ContactContext } from '../../../ContactContext'

export default function ContactOptions() {
  const { openContact, updateContact } = useContext(ContactContext)
  const [updatedContact, setUpdatedContact] = useState(openContact)

  useEffect(() => {
    setUpdatedContact(openContact)
  }, [openContact])

  const handleSubmit = e => {
    e.preventDefault()
    updateContact(openContact.id, updatedContact)
  }

  const contactOptions = 'contactOptions'
  return (
    <>
      <form onSubmit={handleSubmit} className={contactOptions}>
        {/* {Object.keys(openContact).map(key => (
          <input
            key={key.toString()}
            type="text"
            value={updatedContact[key] || ''}
            onChange={e => {
              console.log(key)
              setUpdatedContact({
                ...updatedContact,
                key: e.target.value,
              })
            }}
          />
        ))} */}

        <div className={`${contactOptions}__group--name`}>
          <input
            placeholder="first name"
            type="text"
            value={updatedContact.firstName || ''}
            onChange={e =>
              setUpdatedContact({
                ...updatedContact,
                firstName: e.target.value,
              })
            }
          />
          <input
            placeholder="surname"
            type="text"
            value={updatedContact.surname || ''}
            onChange={e =>
              setUpdatedContact({ ...updatedContact, surname: e.target.value })
            }
          />
        </div>

        <div className={`${contactOptions}__group--contact`}>
          <input
            placeholder="email"
            type="email"
            value={updatedContact.email || ''}
            onChange={e =>
              setUpdatedContact({ ...updatedContact, email: e.target.value })
            }
          />
          <input
            placeholder="phone"
            type="tel"
            value={updatedContact.phone || ''}
            onChange={e =>
              setUpdatedContact({ ...updatedContact, phone: e.target.value })
            }
          />
        </div>

        <div className={`${contactOptions}__group--location`}>
          <input
            placeholder="city"
            type="text"
            value={updatedContact.city || ''}
            onChange={e =>
              setUpdatedContact({ ...updatedContact, city: e.target.value })
            }
          />
          <input
            placeholder="zip"
            type="text"
            value={updatedContact.zip || ''}
            onChange={e =>
              setUpdatedContact({ ...updatedContact, zip: e.target.value })
            }
          />
          <input
            placeholder="street"
            type="text"
            value={updatedContact.street || ''}
            onChange={e =>
              setUpdatedContact({ ...updatedContact, street: e.target.value })
            }
          />
          <input
            placeholder="region"
            type="text"
            value={updatedContact.region || ''}
            onChange={e =>
              setUpdatedContact({ ...updatedContact, region: e.target.value })
            }
          />
        </div>
        <input type="submit" value="Save" onClick={handleSubmit} />
      </form>
    </>
  )
}
