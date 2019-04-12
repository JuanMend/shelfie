import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import ProductFiles from './Components/ProductFiles';

export default (
	<Switch>
		<Route path="/header" component={Header} />
		<Route path="/form" component={Form} />
		<Route path="/" component={Dashboard} />
	</Switch>
);
