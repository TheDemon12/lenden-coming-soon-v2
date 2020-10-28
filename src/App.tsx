import React from 'react';
import AboutUs from './components/aboutUs';
import Banner from './components/banner';
import Faq from './components/faq';
import Footer from './components/footer';
import MainNavbar from './components/navbar';
import Register from './components/register';

function App() {
	return (
		<React.Fragment>
			<MainNavbar />
			<Banner />
			<AboutUs />
			<Register />
			<Faq />
			<Footer />
		</React.Fragment>
	);
}

export default App;
