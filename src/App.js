import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TimelineItemHolder from './timeline-item-holder.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TimelineItemHolder />
      </div>
    );
  }
}

export default App;
