import * as React from 'react';

import { Button, Nav, Navbar } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { RouteComponentProps } from 'react-router-dom';

export interface MainNavbarProps extends RouteComponentProps {}

const MainNavbar: React.FC<MainNavbarProps> = props => {
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
					<Button onClick={() => props.history.push('/post-product')}>
						Register your Product
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNavbar;
