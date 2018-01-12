import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
	    axios.get('http://localhost:3001/getCategories')
	    	.then((response) => {
	    		this.setState({
	    			categoriesList: response.data
	    		});
			});
  	}

	render() {
		return (
			<div className="category-panel">
    		  {
    		  	this.state.categoriesList && this.state.categoriesList.map((v) => {
    		  		return (<div key={v}><Link to={'/Cat/'+v}>{v}</Link></div>)
    		  	})
			  }
			  
      		</div>
		);
	}
}

export default Categories;

