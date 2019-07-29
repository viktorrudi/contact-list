import React, { useState, useContext } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { ContactContext } from '../../ContactContext';
import { emptyInputKeys } from '../../../utils';
import inputModel from '../../../utils/input_model';
import './CreateContact.scss';

export default function CreateContact() {
  const [newContactInfo, setNewContactInfo] = useState(emptyInputKeys);
  const [showAllNewInfo, setShowAllNewInfo] = useState(false);
  const { addContact, setNotification } = useContext(ContactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { success, message } = addContact(newContactInfo);
    // If validation fails
    if (!success) {
      setNotification('error', message);
    } else {
      setNotification('success', message);
      setNewContactInfo(emptyInputKeys);
    }
  };

  const handleShowInfo = () => {
    setShowAllNewInfo(!showAllNewInfo);
  };

  const createContact = 'CreateContact';
  return (
    <div className={createContact}>
      <form onSubmit={handleSubmit}>
        <div className={`${createContact}__main`}>
          {inputModel.map(({
            key, text, type, group,
          }) => (group === 'name' ? (
            <input
              id={key}
              key={key}
              placeholder={text}
              type={type}
              value={newContactInfo[key] || ''}
              onChange={e => setNewContactInfo({ ...newContactInfo, [key]: e.target.value })}
            />
          ) : null))}

          <span
            tabIndex={0}
            role="button"
            className="dropdown-toggle"
            onClick={handleShowInfo}
            onKeyPress={handleShowInfo}
          >
            {showAllNewInfo ? <FaChevronUp /> : <FaChevronDown />}
            {' '}
            {window.innerWidth <= 800 ? 'Additional details' : null}
          </span>

          <button onClick={handleSubmit} type="submit">
            Save new contact
            {' '}
          </button>
        </div>

        {/* Hidden add contact details */}
        <div className={`${createContact}__extra ${showAllNewInfo ? 'visible' : 'hidden'}`}>
          <h3>Additional contact information</h3>
          <div className={`${createContact}__extra--general`}>
            {inputModel.map(({
              key, text, type, group,
            }) => (group === 'contact' ? (
              <input
                id={key}
                key={key}
                placeholder={text}
                type={type}
                value={newContactInfo[key] || ''}
                onChange={e => setNewContactInfo({ ...newContactInfo, [key]: e.target.value })}
              />
            ) : null))}
          </div>

          <div className={`${createContact}__extra--address`}>
            {inputModel.map(({
              key, text, type, group,
            }) => (group === 'location' ? (
              <input
                id={key}
                key={key}
                placeholder={text}
                type={type}
                value={newContactInfo[key] || ''}
                onChange={e => setNewContactInfo({ ...newContactInfo, [key]: e.target.value })}
              />
            ) : null))}
          </div>
        </div>
      </form>
    </div>
  );
}
