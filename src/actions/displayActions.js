/* eslint-disable import/prefer-default-export */
import { SET_OPEN_CONTACT } from '../constants';

export const setOpenContact = contact => (dispatch) => {
  dispatch({
    type: SET_OPEN_CONTACT,
    payload: contact,
  });
};
