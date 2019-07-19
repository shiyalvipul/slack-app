import React, { Fragment } from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route,
 } from 'react-router-dom';

import Login from './scenes/login/Login';
import Register from './scenes/register/Register';
import  DashboardContainer  from './scenes/dashboard/Dashboard';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={DashboardContainer}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch> 
    </Fragment>
  </BrowserRouter>
  )


export default Routes
