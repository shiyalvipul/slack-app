import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import UserPanel from './UserPanel';
import firebase from '../../../../../../config/firebase';
import { clearUser } from '../../../../../redux/actions';

class UserPanelContainer extends Component {
  dropdownOptions = () => [
    {
      key: '1',
      text: <span><Icon name="user circle" />Welcome to {" "}  
        <strong>
         {this.props.user && this.props.user.displayName }
        </strong>
        </span>,
      disabled: true,
    },
    {
      key: '2',
      text: <span><Icon name="snowflake" />Change Avatar</span>,
    },
    {
      key: '3',
      text: <span onClick={this.handleSignOut}><Icon name="sign out" />Sign Out</span>,
    },
  ];

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign out!')
        this.props.clearUser();
      });
  }

  render() {
    return (
      <UserPanel 
        dropdownOptions={this.dropdownOptions()}
        user={this.props.user}
      />
    )
  }
}


const mapDispatchToProps = dispatch => ({
  clearUser: () => dispatch(clearUser()),
})
export default  connect('', mapDispatchToProps)(UserPanelContainer); 