import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageLoader from './common/pageLoader';
import ErrorBoundary from './common/errorBoundary';

const PostProduct = React.lazy(() => import('./postProduct'));
const Home = React.lazy(() => import('./home'));
const Blog = React.lazy(() => import('./blog'));
const Footer = React.lazy(() => import('./common/footer'));
const MainNavbar = React.lazy(() => import('./common/navbar'));
const BlogPost = React.lazy(() => import('./blog/blogPost'));

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<>
			<ErrorBoundary>
				<React.Suspense
					fallback={
						<React.Fragment>
							<PageLoader />
						</React.Fragment>
					}>
					<MainNavbar />
					<Switch>
						<Route path='/blog/1' component={BlogPost} />
						<Route path='/blog' component={Blog} />
						<Route path='/post-product' component={PostProduct} />
						<Route path='/' component={Home} />
					</Switch>
					<Footer />
				</React.Suspense>
			</ErrorBoundary>
		</>
	);
};

export default App;
