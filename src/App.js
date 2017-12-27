import React, { Component } from 'react';
import Home from './Home.js';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

//this is the Home page. Home component will stay mounted. We will change the components inside Home
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/*" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
