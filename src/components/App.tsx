import React from 'react';
import AboutUs from './aboutUs';
import Banner from './banner';
import Faq from './faq';
import Footer from './footer';
import MainNavbar from './navbar';
import Register from './register';
import Subscribe from './subscribe';

function App() {
	return (
		<React.Fragment>
			<MainNavbar />
			<Banner />
			<Register />
			<AboutUs />
			<Subscribe />
			<Faq />
			<Footer />
		</React.Fragment>
	);
}

export default App;
