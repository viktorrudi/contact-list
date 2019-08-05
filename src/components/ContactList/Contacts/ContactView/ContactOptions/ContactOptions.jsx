/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { showContactView } from '../../../../../actions/displayActions';
import { updateContact, deleteContact } from '../../../../../actions/contactActions';
import UpdateInputs from './UpdateInputs/UpdateInputs';
import './ContactOptions.scss';

function ContactOptions({ openContact }) {
  const [updatedContact, setUpdatedContact] = useState(openContact);

  useEffect(() => {
    setUpdatedContact(openContact);
  }, [openContact]);

  const handleDelete = (e) => {
    e.preventDefault();

    deleteContact(openContact.id);
    // const { message } = deleteContact(openContact.id);
    // Will allways succeed, so not checking
    // setNotification('success', message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Attempting to update contact
    updateContact(updatedContact.id, updatedContact);
    // const { success, message } = updateContact(updatedContact.id, updatedContact);
    // Validates input
    // if (!success) return setNotification('error', message);
    // return setNotification('success', message);
  };

  const contactOptions = 'ContactOptions';
  return (
    <form onSubmit={handleSubmit} className={contactOptions}>
      <div
        tabIndex={0}
        role="button"
        className="btn close"
        onKeyPress={() => showContactView(false)}
        onClick={() => showContactView(false)}
      >
        <FaTimes />
      </div>

      {/* <UpdateInputs updatedContact={updatedContact} setUpdatedContact={setUpdatedContact} /> */}

      <button className="btn green" type="submit">
        Update contact
      </button>

      <button tabIndex={0} type="button" className="btn red" onClick={handleDelete}>
        Delete contact
      </button>
    </form>
  );
}

const mapStateToProps = state => ({
  openContact: state.display.openContact,
});

export default connect(
  mapStateToProps,
  { showContactView, deleteContact, updateContact },
)(ContactOptions);
