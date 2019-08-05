/* eslint-disable consistent-return */
import { FETCH_CONTACTS, CREATE_CONTACT, UPDATE_CONTACT } from '../constants';

const initState = {
  contacts: [],
  newContact: {},
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS: {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case CREATE_CONTACT: {
      return {
        ...state,
        newContact: action.payload,
      };
    }
    case UPDATE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          // Matches ID of updating contact to ID in DB/state
          if (action.payload.id === contact.id) {
            // Replacing old data with new data
            Object.assign(contact, action.payload);
          }
          // Returns contact - changed or not
          return contact;
        }),
      };
    }
    default:
      return state;
  }
};

export default contactReducer;
