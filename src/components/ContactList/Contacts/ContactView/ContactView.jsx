import React from 'react';
import PropTypes from 'prop-types';
import ContactOptions from './ContactOptions/ContactOptions';
import './ContactView.scss';

export default function ContactView({ openContact }) {
  // console.log('contactview com', props);
  const contactView = 'ContactView';
  return (
    <div className={`${contactView} ${openContact && openContact.id >= 0 ? 'open' : 'closed'}`}>
      <ContactOptions />
    </div>
  );
}

ContactView.propTypes = {
  openContact: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

// ContactView.defaultProps = {
// };
