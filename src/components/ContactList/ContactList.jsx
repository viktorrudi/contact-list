/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from '../../actions/contactActions';
import { setOpenContact } from '../../actions/displayActions';
// import CreateContact from './CreateContact/CreateContact';
import Contacts from './Contacts/Contacts';
// import UserNotification from '../UserNotification/UserNotification';

class ContactList extends Component {
  componentWillMount() {
    this.props.fetchContacts();
    this.props.setOpenContact();
  }

  render() {
    return (
      <>
        {/* <CreateContact /> */}
        <Contacts
          contacts={this.props.library.contacts}
          openContact={this.props.openContact}
          setOpenContact={this.props.setOpenContact}
        />
        {/* <UserNotification /> */}
      </>
    );
  }
}

// Naming from reducers/index - combineReducers
const mapStateToProps = state => ({
  library: state.library,
  openContact: state.openContact,
});

ContactList.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  openContact: PropTypes.object,
};

export default connect(
  mapStateToProps,
  { fetchContacts, setOpenContact },
)(ContactList);
