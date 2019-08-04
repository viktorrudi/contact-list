/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { FETCH_CONTACTS, NEW_CONTACT } from '../constants';

const initState = {
  contacts: [],
  newContact: {},
};

export const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case NEW_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    default:
      return state;
  }
};
