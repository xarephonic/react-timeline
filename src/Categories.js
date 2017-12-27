import React, { Component } from 'react';
import axios from 'axios';

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
    		  		return (<div key={v}>{v}</div>)
    		  	})
    		  }
      		</div>
		);
	}
}

export default Categories;

