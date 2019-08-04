import React from 'react';
import ContactOptions from './ContactOptions/ContactOptions';
import './ContactView.scss';

export default function ContactView() {
  const contactView = 'ContactView';
  return (
    <div className={`${contactView} ${openContact.id >= 0 ? 'open' : 'closed'}`}>
      <ContactOptions />
    </div>
  );
}
