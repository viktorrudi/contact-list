/* eslint-disable import/prefer-default-export */
import { SET_OPEN_CONTACT, SET_CONTACT_VIEW_VISIBILITY } from '../constants';

const initState = {
  openContact: {},
  showContactView: false,
};

const displayReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_OPEN_CONTACT:
      return {
        ...state,
        openContact: action.payload,
      };
    case SET_CONTACT_VIEW_VISIBILITY:
      return {
        ...state,
        showContactView: action.payload,
      };
    default:
      return state;
  }
};

export default displayReducer;
