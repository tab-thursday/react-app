import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import Tabs from './components/Tabs';
import Login from './components/Login';
import Register from './components/Register';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    
    <div className="App">
      
      <PrivateRoute exact path  = '/tabs' component = {Tabs}/>
      <Route exact path  = '/' component = {Login}/>
      <Route
              exact
              path="/register"
              render={props => <Register {...props} />}
            />{" "}
    </div>
  );
}

export default App;
