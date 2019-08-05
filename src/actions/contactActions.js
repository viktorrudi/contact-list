/* eslint-disable import/prefer-default-export */
import { FETCH_CONTACTS, CREATE_CONTACT } from '../constants';
import contactDB from '../database/contacts.json';

export const fetchContacts = () => (dispatch) => {
  dispatch({
    type: FETCH_CONTACTS,
    payload: contactDB,
  });
};

export const createContact = contact => (dispatch) => {
  const newContact = contact;
  newContact.id = contactDB.length;
  console.log('new contact:', newContact);
  dispatch({
    type: CREATE_CONTACT,
    payload: newContact,
  });
};

export const updateContact = contact => (dispatch) => {
  // TODO
};

export const deleteContact = contact => (dispatch) => {
  // TODO
};
