import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ArticlesHolder from './articlesHolder.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid fluid>
          <Row className="show-grid">
            <Col mdOffset={2} md={2}>LEFT PANEL</Col>
            <Col xs={12} md={4}>
              <ArticlesHolder />
            </Col>
            <Col xs={6} md={2}>RIGHT PANEL</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
