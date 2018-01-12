import React, { Component } from 'react';
import {
  Switch,
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
import Categories from './Categories.js';
import CatSoloHolder from './CatSoloHolder.js';

class Home extends Component {

  componentWillMount() {
  }

  render() {
    return (
	    <div className="App">
	      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
	      <header className="App-header text-center">
	      	<Link to='/'>
	        	<img src={logo} className="App-logo" alt="logo" />
	        </Link>
	        <h1 className="App-title">MERHABA</h1>
	        <Categories />
	      </header>
	      <Grid fluid>
	        <Row className="show-grid">
	          <Col mdOffset={2} md={2}>LEFT PANEL</Col>
	          <Col xs={12} md={4}>
	          	<Switch>
	          		//Add Routes here to display at midsection
	      			<Route exact path="/" component={ArticlePreviewHolder} />
	      			<Route exact path="/article/:id" component={ArticleSoloHolder} />
							<Route exact path="/Cat/:catId" component={CatSoloHolder} />
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