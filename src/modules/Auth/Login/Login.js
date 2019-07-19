import React, { Component } from 'react'
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import firebase from '../../../config/firebase';
// import { showNotification } from '../../../utils/Notifications';


class Login extends Component {
  state = {
    email:'',
    password:'',
    errors:[],
    loading:  false,
  };


  //Strore Value in stact when input change event fire
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlerSubmit = event => {
    event.preventDefault();
    if(this.isFormValid(this.state)) {
      this.setState({
        errors: [],
        loading: true,
      })
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(SignedInUser => {
        console.log(SignedInUser);
      })
      .catch(err => {
        console.error(err)
        this.setState({
          errors: this.state.errors.concat(err),
          loading: false,

        });
      });
    }
  }

  //Input field is  not empty check
  isFormValid = ({email, password, }) => email && password;

  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);
  
  //Hightlights input Field when is any error
  handleInputError = (errors, inputName) => {
      return errors.some(error => 
         error.message.toLowerCase().includes(inputName)
       ) ? "error" : '';
  }

  render() {
    const  { 
      email, 
      password, 
      errors,
      loading,
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="purple" textAlign="center">
            <Icon name="sign-in" color="purple"/>
              Login to VChat
          </Header>
          <Form onSubmit={this.handlerSubmit} size="large">
            <Segment stacked> 
              <Form.Input 
                fluid name="email" 
                icon="mail" 
                iconPosition="left" 
                placehoder="Email Address" 
                onChange={this.handleChange} 
                value={email}
                type="email"
                className={this.handleInputError(errors, 'email')}
                />
              <Form.Input 
                fluid 
                name="password"
                icon="lock"
                iconPosition="left"
                placehoder="Password"
                onChange={this.handleChange}
                value={password}
                type="password"
                className={this.handleInputError(errors, 'password')}
                />
              
              <Button 
                color="purple" 
                fluid 
                size="large"
                disabled={loading}
                className={loading ? 'loading' : ''}
              >
                Submit
              </Button>
            </Segment>
          </Form>

          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          
          <Message>Don't have a account? <Link to="/register">Sign Up</Link></Message>
        </Grid.Column>
          
      </Grid>
    )
  }
}

export default Login;