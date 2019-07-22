import React, { Component } from 'react';
import { connect } from 'react-redux';

import SidePanel from './SidePanel'

class SidePanelContainer extends Component {
  render() {
    return (
      <SidePanel 
        user={this.props.user} 
      />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.currentUser
}); 

export default  connect(mapStateToProps)(SidePanelContainer);
