/* eslint-disable react/prop-types */
import React from 'react';
import Contact from './Contact';
import './Contacts.scss';
// import ContactView from './ContactView/ContactView';

export default function ContactList({ contacts, openContact, setOpenContact }) {
  const contactsStyle = 'Contacts';
  console.log('contacts.jsx', openContact);
  console.log('contacts.jsx', setOpenContact);
  return (
    <div className={contactsStyle}>
      {!contacts.length ? (
        <p className={`${contactsStyle}__no-contacts`}>
          You have no friends?
          <span role="img" aria-label="sadface">
            😞
          </span>
        </p>
      ) : null}

      <div className={`${contactsStyle}__wrapper`}>
        {contacts
          .sort((a, b) => a.firstName.localeCompare(b.firstName))
          .map(contact => (
            <Contact key={contact.id} contact={contact} />
            // <Contact key={contact.id} contact={contact} setOpenContact={setOpenContact} />
          ))}
      </div>
      {/* <ContactView /> */}
    </div>
  );
}
