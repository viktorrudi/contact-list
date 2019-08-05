/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { connect } from 'react-redux';
import { createContact } from '../../../actions/contactActions';
import { emptyInputKeys } from '../../../utils';
import inputModel from '../../../utils/input_model';
import './CreateContact.scss';

function CreateContact(props) {
  const [newContactInfo, setNewContactInfo] = useState(emptyInputKeys);
  const [showAllNewInfo, setShowAllNewInfo] = useState(false);
  // const { addContact, setNotification } = useContext(ContactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createContact(newContactInfo);
    setNewContactInfo(emptyInputKeys);
  };

  const handleShowInfo = () => {
    setShowAllNewInfo(!showAllNewInfo);
  };

  const style = 'CreateContact';
  return (
    <div className={style}>
      <form onSubmit={handleSubmit}>
        <div className={`${style}__main`}>
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
        <div className={`${style}__extra ${showAllNewInfo ? 'visible' : 'hidden'}`}>
          <h3>Additional contact information</h3>
          <div className={`${style}__extra--general`}>
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

          <div className={`${style}__extra--address`}>
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

// const mapActionToProps = {
//   addContact: state.createContact
// };

export default connect(
  null,
  { createContact },
)(CreateContact);
