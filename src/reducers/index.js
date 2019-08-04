import { combineReducers } from 'redux';
import { contactReducer } from './contactReducer';
import { displayReducer } from './displayReducer';

export default combineReducers({
  library: contactReducer,
  display: displayReducer,
});
