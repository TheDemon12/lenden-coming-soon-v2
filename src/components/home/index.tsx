import React from 'react';
import AboutUs from './aboutUs';
import Banner from './banner';
import Faq from './faq';
import Footer from './footer';
import MainNavbar from './navbar';
import Register from './register';
import Subscribe from './subscribe';
import { RouteComponentProps } from 'react-router-dom';

export interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps> = props => {
	return (
		<div className='home'>
			<MainNavbar {...props} />
			<Banner {...props} />
			<Register {...props} />
			<AboutUs {...props} />
			<Subscribe />
			<Faq />
			<Footer />
		</div>
	);
};

export default Home;
