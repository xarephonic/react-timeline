import React, { Component } from 'react';
import Home from './Home.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/article/:id" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
