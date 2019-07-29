import React, { useContext } from 'react';
import { ContactContext } from '../../ContactContext';
import Contact from './Contact';
import './Contacts.scss';
import ContactView from './ContactView/ContactView';

export default function ContactList() {
  const { contacts, setOpenContact } = useContext(ContactContext);

  const contactsStyle = 'Contacts';
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
            <Contact key={contact.id} contact={contact} setOpenContact={setOpenContact} />
          ))}
      </div>
      <ContactView />
    </div>
  );
}
