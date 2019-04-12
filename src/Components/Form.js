import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image_url: '',
			name: '',
			price: ''
		};
		this.handlerChange = this.handlerChange.bind(this);
	}

	postForm = () => {
		axios
			.post('/api/inventory', {
				image_url: this.state.image_url,
				name: this.state.name,
				price: this.state.price
			})
			.then((res) => {
				this.setState({ inventory: res.data });
			});
	};

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<form onSubmit={this.postForm()} className="productForm">
				<div className="positionForm">
					<h3>Image URL:</h3>
					<input className="formInput" name="image_url" onChange={this.handlerChange} />

					<h3>Product Name:</h3>
					<input className="formInput" name="name" onChange={this.handlerChange} />

					<h3>Price</h3>
					<input className="formInput" name="price" onChange={this.handlerChange} />
					<div className="formButtons">
						<Link to="/">
							<button>Cancel</button>
						</Link>
						<Link to="/">
							<button type="submit">Save Changes</button>
						</Link>
					</div>
				</div>
			</form>
		);
	}
}

export default Form;
