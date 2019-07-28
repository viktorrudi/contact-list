/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react';
import { ContactContext } from '../../../../../ContactContext';

export default function ContactOptions({ updatedContact, setUpdatedContact }) {
  const { openContact } = useContext(ContactContext);

  useEffect(() => {
    setUpdatedContact(openContact);
  }, [openContact, setUpdatedContact]);

  const contactOptions = 'ContactOptions';
  return (
    <>
      {/* FIXME: How to solve this? */}
      {/* {Object.keys(openContact).map(key => (
          <input
            key={key.toString()}
            type="text"
            value={updatedContact[key] || ''}
            onChange={e => {
              setUpdatedContact({
                ...updatedContact,
                key: e.target.value,
              })
            }}
          />
        ))} */}

      <div className={`${contactOptions}__group--name`}>
        <input
          data-firstname
          placeholder="first name"
          type="text"
          value={updatedContact.firstName || ''}
          onChange={e => setUpdatedContact({
            ...updatedContact,
            firstName: e.target.value,
          })
          }
        />
        <input
          data-surname
          placeholder="surname"
          type="text"
          value={updatedContact.surname || ''}
          onChange={e => setUpdatedContact({ ...updatedContact, surname: e.target.value })}
        />
      </div>

      <div className={`${contactOptions}__group--contact`}>
        <h3>Contact details</h3>
        <input
          data-email
          placeholder="email"
          type="email"
          value={updatedContact.email || ''}
          onChange={e => setUpdatedContact({ ...updatedContact, email: e.target.value })}
        />
        <input
          data-phone
          placeholder="phone"
          type="tel"
          value={updatedContact.phone || ''}
          onChange={e => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
        />
      </div>

      <div className={`${contactOptions}__group--location`}>
        <h3>Location details</h3>
        <input
          data-city
          placeholder="city"
          type="text"
          value={updatedContact.city || ''}
          onChange={e => setUpdatedContact({ ...updatedContact, city: e.target.value })}
        />
        <input
          data-zip
          placeholder="zip"
          type="text"
          value={updatedContact.zip || ''}
          onChange={e => setUpdatedContact({ ...updatedContact, zip: e.target.value })}
        />
        <input
          data-street
          placeholder="street"
          type="text"
          value={updatedContact.street || ''}
          onChange={e => setUpdatedContact({ ...updatedContact, street: e.target.value })}
        />
        <input
          data-region
          placeholder="region"
          type="text"
          value={updatedContact.region || ''}
          onChange={e => setUpdatedContact({ ...updatedContact, region: e.target.value })}
        />
      </div>
    </>
  );
}
