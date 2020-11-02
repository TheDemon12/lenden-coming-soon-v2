import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostProduct from './postProduct';
import Home from './home';
import Blog from './blog';
import Footer from './common/footer';
import MainNavbar from './common/navbar';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<React.Fragment>
			<MainNavbar />
			<Switch>
				<Route path='/blog' component={Blog} />
				<Route path='/post-product' component={PostProduct} />
				<Route path='/' component={Home} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
};

export default App;
