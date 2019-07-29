/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react';
import { ContactContext } from '../../../../../ContactContext';
import inputModel from '../../../../../../utils/input_model';

export default function UpdateInputs({ updatedContact, setUpdatedContact }) {
  const { openContact } = useContext(ContactContext);

  useEffect(() => {
    setUpdatedContact(openContact);
  }, [openContact, setUpdatedContact]);

  const contactOptions = 'ContactOptions';
  return (
    <div className={`${contactOptions}__inputs`}>
      {inputModel.map(({
        key, text, type, label,
      }) => (
        <label id={key} key={key} htmlFor={key}>
          {label ? text : null}
          <input
            id={key}
            key={key}
            placeholder={text}
            type={type}
            value={updatedContact[key] || ''}
            onChange={e => setUpdatedContact({ ...updatedContact, [key]: e.target.value })}
          />
        </label>
      ))}
    </div>
  );
}
