import React, { Component } from 'react';
import {
  Switch as Switch,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ArticlePreviewHolder from './ArticlePreviewHolder.js';
import ArticleSoloHolder from './ArticleSoloHolder.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	console.log('home mount');
  }

  render() {
    return (
	    <div className="App">
	      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
	      <header className="App-header text-center">
	      	<Link to='/'>
	        	<img src={logo} className="App-logo" alt="logo" />
	        </Link>
	        <h1 className="App-title">Welcome to React</h1>
	      </header>
	      <Grid fluid>
	        <Row className="show-grid">
	          <Col mdOffset={2} md={2}>LEFT PANEL</Col>
	          <Col xs={12} md={4}>
	          	<Switch>
	      			<Route exact path="/" component={ArticlePreviewHolder} />
	      			<Route exact path="/article/:id" component={ArticleSoloHolder} />
	          	</Switch>
	          </Col>
	          <Col xs={6} md={2}>RIGHT PANEL</Col>
	        </Row>
	      </Grid>
	    </div>
    );
  }
}

export default Home;