import React, { Component } from 'react';

class TimelineItem extends Component {

	render() {
		const user = this.props.user;
		return (
			<li>
				<div className="timeline-item">
					<img src={user.picture.thumbnail} />
					<div>{user.name.title} {user.name.first} {user.name.last}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div>{user.location.state}/{user.location.city}-{user.nat}</div>
				</div>
			</li>
		);
	}
}

export default TimelineItem;

