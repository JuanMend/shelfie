import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import ProductFiles from './Components/ProductFiles';
import routes from './routes';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<HashRouter>
				<div>
					<Header />
					<Dashboard />
					<Form />
					{routes}
				</div>
			</HashRouter>
		);
	}
}

export default App;
