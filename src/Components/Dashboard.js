import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inventory: []
		};
		this.deleteForm = this.deleteForm.bind(this);
	}

	componentDidMount() {
		axios.get('/api/inventory').then((res) => {
			this.setState({ inventory: res.data });
		});
	}

	deleteForm() {
		axios.delete('/api/inventory/').then((res) => {
			this.setState({ inventory: res.data });
		});
	}

	render() {
		return (
			<div>
				<img src={this.state.inventory.image_url} />
				<h3>{this.state.inventory.name}</h3>
				<h3>{this.state.inventory.price}</h3>
				dfdf
			</div>
		);
	}
}
export default Dashboard;
