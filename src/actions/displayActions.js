/* eslint-disable import/prefer-default-export */
import { SET_OPEN_CONTACT, SET_CONTACT_VIEW_VISIBILITY } from '../constants';

export const setOpenContact = contact => (dispatch) => {
  dispatch({
    type: SET_OPEN_CONTACT,
    payload: contact,
  });
};

export const showContactView = status => (dispatch) => {
  dispatch({
    type: SET_CONTACT_VIEW_VISIBILITY,
    payload: status,
  });
};
