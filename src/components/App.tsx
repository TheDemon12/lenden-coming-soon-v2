import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostProduct from './postProduct';
import Home from './home';

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route path='/post-product' component={PostProduct} />
				<Route path='/' component={Home} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
