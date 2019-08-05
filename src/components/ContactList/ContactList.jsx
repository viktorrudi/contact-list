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
import CreateContact from './CreateContact/CreateContact';
import Contacts from './Contacts/Contacts';
// import UserNotification from '../UserNotification/UserNotification';

class ContactList extends Component {
  componentWillMount() {
    this.props.fetchContacts();
    this.props.setOpenContact();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newContact) {
      this.props.contacts.push(nextProps.newContact);
    }
  }

  render() {
    return (
      <>
        <CreateContact />
        <Contacts
          contacts={this.props.contacts}
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
  contacts: state.library.contacts,
  newContact: state.library.newContact,
  openContact: state.display.openContact,
});

ContactList.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  newContact: PropTypes.object,
  openContact: PropTypes.object,
};

export default connect(
  mapStateToProps,
  { fetchContacts, setOpenContact },
)(ContactList);
