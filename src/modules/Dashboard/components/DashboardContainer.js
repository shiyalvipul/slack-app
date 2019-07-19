import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router';

import Dashboard from './Dashboard'
import { setUser, clearUser } from '../../../modules/redux/actions';
import firebase from '../../../config/firebase';
import Spinner from '../../../modules/Spinner/Spinner';



class DashboardContainer extends Component {
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.props.setUser(user);
        this.props.history.push('/');
      } else {
        this.props.clearUser();
        this.props.history.push('/login');
      }
    })
  }
  
  render() {
    return (
      this.props.isLoading  
      ? <Spinner /> : <Dashboard />
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DashboardContainer));