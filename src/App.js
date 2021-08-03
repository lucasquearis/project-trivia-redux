import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Configuration from './pages/Configuration';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/config" component={ Configuration } />
      </Switch>
    );
  }
}

export default App;
