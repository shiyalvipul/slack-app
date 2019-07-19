import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import UserPanel from './UserPanel';
import firebase from '../../../../../../config/firebase';

class UserPanelContainer extends Component {
  dropdownOptions = () => [
    {
      key: '1',
      text: <span><Icon name="user circle" />Welcome <strong>User</strong></span>,
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
      .then(() => console.log('Sign out!'));

  }

  render() {
    return (
      <UserPanel 
        dropdownOptions={this.dropdownOptions()}
      />
    )
  }
}

export default UserPanelContainer; 