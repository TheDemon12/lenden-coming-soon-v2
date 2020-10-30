import * as React from 'react';

import { Button, Nav, Navbar } from 'react-bootstrap';
import { scroller } from 'react-scroll';

export interface MainNavbarProps {}

const MainNavbar: React.FC<MainNavbarProps> = () => {
	return (
		<Navbar collapseOnSelect expand='lg' variant='dark'>
			<Navbar.Brand>Lenden-Logo</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className='ml-auto'>
					<Nav.Link onClick={() => scroller.scrollTo('aboutUs', {})}>
						About Us
					</Nav.Link>
					<Nav.Link onClick={() => scroller.scrollTo('faq', {})}>
						FAQ's
					</Nav.Link>
					<Nav.Link onClick={() => scroller.scrollTo('footer', {})}>
						Contact Us
					</Nav.Link>
					<Button>Register your Product</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNavbar;
