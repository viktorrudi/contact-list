/* eslint-disable import/prefer-default-export */
import { SET_OPEN_CONTACT } from '../constants';

const initState = {
  openContact: {},
};

export const displayReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_OPEN_CONTACT:
      return {
        ...state,
        openContact: action.payload,
      };
    default:
      return state;
  }
};
