import React, { Component } from 'react';
import TimelineItem from './timeline-item.js';

class TimelineItemHolder extends Component {
	constructor(props) {
		super(props);
		this.state = {users: []};
		this.getNewUsers = this.getNewUsers.bind(this);
		this.updateUsers = this.updateUsers.bind(this);
	}

	updateUsers(newUsersArr) {
		this.setState({
			users: this.state.users.concat(newUsersArr)
		});

		window.scrollTo(0,document.querySelector('.timeline-item-holder').scrollHeight);
	}

	getNewUsers() {
		const url = "https://randomuser.me/api/?exc=login,id&noinfo&results=1";

		let request= new XMLHttpRequest();
	    request.onload = () => { 
	    	let arr = JSON.parse(request.response).results;
	    	this.updateUsers(arr);
	    };
	    request.open('GET',url);
	    request.send();
	}

	componentDidMount() {
		setInterval(this.getNewUsers, 5000);
		
	}

	render() {
		return (
			<div className="timeline-item-holder">
				<ul>
					{
						this.state.users.map((v, i) => {
							return (<TimelineItem key={i} user={v} />)
						})
					}
				</ul>
			</div>
		);

	}
}

export default TimelineItemHolder;

