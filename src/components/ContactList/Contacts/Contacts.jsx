/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Contact from './Contact';
import './Contacts.scss';
import ContactView from './ContactView/ContactView';

export default class ContactList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('updating', nextProps, nextState);
    return true;
  }

  render() {
    const { contacts, openContact, setOpenContact } = this.props;
    console.log('CONTACTS IN CONTACTS.JS', contacts);
    console.log('contactlist opencontact', openContact);
    const style = 'Contacts';
    return (
      <div className={style}>
        {!contacts.length ? (
          <p className={`${style}__no-contacts`}>
            You have no friends?
            <span role="img" aria-label="sadface">
              😞
            </span>
          </p>
        ) : null}

        <div className={`${style}__wrapper`}>
          {contacts
            .sort((a, b) => a.firstName.localeCompare(b.firstName))
            .map(contact => (
              <Contact key={contact.id} contact={contact} setOpenContact={setOpenContact} />
            ))}
        </div>
        <ContactView openContact={openContact} />
      </div>
    );
  }
}

// export default function ContactList({ contacts, openContact, setOpenContact }) {
//   console.log('CONTACTS IN CONTACTS.JS', contacts);
//   console.log('contactlist opencontact', openContact);

//   const style = 'Contacts';
//   return (
//     <div className={style}>
//       {!contacts.length ? (
//         <p className={`${style}__no-contacts`}>
//           You have no friends?
//           <span role="img" aria-label="sadface">
//             😞
//           </span>
//         </p>
//       ) : null}

//       <div className={`${style}__wrapper`}>
//         {contacts
//           .sort((a, b) => a.firstName.localeCompare(b.firstName))
//           .map(contact => (
//             <Contact key={contact.id} contact={contact} setOpenContact={setOpenContact} />
//           ))}
//       </div>
//       <ContactView openContact={openContact} />
//     </div>
//   );
// }
