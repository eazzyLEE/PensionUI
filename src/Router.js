import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import CreateAccount from './components/authentication/CreateAccount';
import Login from './components/authentication/Login';
import AddCard from './components/authentication/AddCard';
import Dashboard from './components/dashboard';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="create_account" component={CreateAccount} initial />
          <Scene key="login" component={Login} />
          <Scene key="add_card" component={AddCard} />
          <Scene key="dashboard" component={Dashboard} />
        </Scene>
      </Router>
    );
  }
}
