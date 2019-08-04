/* eslint-disable import/prefer-default-export */
import { FETCH_CONTACTS, NEW_CONTACT } from '../constants';
import contactDB from '../database/contacts.json';

export const fetchContacts = () => (dispatch) => {
  dispatch({
    type: FETCH_CONTACTS,
    payload: contactDB,
  });
};

export const newContact = contact => (dispatch) => {
  dispatch({
    type: NEW_CONTACT,
    payload: contact,
  });
};

// OR THIS:
// export function fetchContacts() {
//   return function (dispatch) {
//     dispatch({
//       ...
//     });
//   };
// }
