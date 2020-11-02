import * as React from 'react';

import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { ReactComponent as Logo } from '../../icons/logo.svg';

export interface MainNavbarProps {}

const MainNavbar: React.FC<MainNavbarProps> = () => {
	const history = useHistory();
	const { pathname } = useLocation();
	const [isExpanded, setExpanded] = React.useState(false);

	return (
		<Navbar expand='lg' variant='dark' expanded={isExpanded}>
			<Navbar.Brand
				onClick={() => {
					history.push('/');
					setExpanded(false);
				}}>
				<Logo />
			</Navbar.Brand>
			<Navbar.Toggle onClick={() => setExpanded(!isExpanded)} />
			<Navbar.Collapse>
				<Nav className='ml-auto'>
					<Nav.Link
						onClick={async () => {
							setExpanded(false);
							if (pathname !== '/') await history.push('/');
							scroller.scrollTo('aboutUs', { offset: -200 });
						}}>
						About Us
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							setExpanded(false);
							history.push('/blog');
						}}>
						Blog
					</Nav.Link>
					<Nav.Link
						onClick={async () => {
							if (pathname !== '/') await history.push('/');
							await scroller.scrollTo('faq', { offset: -200 });
							setExpanded(false);
						}}>
						FAQ's
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							setExpanded(false);
							scroller.scrollTo('footer', { offset: -200 });
						}}>
						Contact Us
					</Nav.Link>
					<Button
						onClick={() => {
							setExpanded(false);
							history.push('/post-product');
						}}>
						Register your Product
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNavbar;
