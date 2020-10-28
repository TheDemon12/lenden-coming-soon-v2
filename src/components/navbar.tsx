import * as React from 'react';

import { Button, Nav, Navbar } from 'react-bootstrap';

export interface MainNavbarProps {}

const MainNavbar: React.FC<MainNavbarProps> = () => {
	return (
		<Navbar collapseOnSelect expand='lg' variant='dark'>
			<Navbar.Brand href='#home'>Lenden-Logo</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link href='#'>About Us</Nav.Link>
					<Nav.Link href='#'>Blog</Nav.Link>
					<Nav.Link href='#'>FAQ's</Nav.Link>
					<Nav.Link href='#'>Contact Us</Nav.Link>
					<Button>Register your Product</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNavbar;
