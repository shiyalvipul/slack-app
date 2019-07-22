import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer, Flip } from 'react-toastify';


import './App.css';
import './assets/styles/app.sass';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer autoClose={5000} transition={Flip}  />
        <Routes />
      </div>
     
    );
  }
}



export default (App);
