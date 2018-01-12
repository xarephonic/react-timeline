import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';

class CatSoloHolder extends Component{
    constructor(props) {
		super(props);
    }
    
    render() {
		return (
			<div>
				{this.props.match.params.catId}
			</div>
		);
	}
}

export default CatSoloHolder;