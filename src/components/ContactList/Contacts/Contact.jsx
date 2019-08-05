/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

export default function Contact({ contact, setOpenContact }) {
  const {
    id, firstName, surname, email,
  } = contact;
  const contactStyle = 'Contact';
  return (
    <div
      tabIndex={0}
      role="button"
      key={id}
      className={`${contactStyle}`}
      onKeyPress={() => setOpenContact(contact)}
      onClick={() => setOpenContact(contact)}
    >
      <span className={`${contactStyle}__name`}>{`${firstName} ${surname}`}</span>
      <span className={`${contactStyle}__email`}>{`${email}`}</span>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
  }),
  setOpenContact: PropTypes.func,
};
