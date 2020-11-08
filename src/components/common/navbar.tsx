import * as React from 'react';

import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { scroller, animateScroll as scroll } from 'react-scroll';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Cross } from '../../icons/cross.svg';
import { ReactComponent as Menu } from '../../icons/menu.svg';

export interface MainNavbarProps {}

const MainNavbar: React.FC<MainNavbarProps> = () => {
	const history = useHistory();
	const { pathname } = useLocation();
	const [isExpanded, setExpanded] = React.useState(false);

	const onNavClick = async (navItem: string) => {
		if (pathname !== '/') await history.push('/');

		if (isExpanded) {
			setExpanded(false);
			scroller.scrollTo(navItem, { offset: -200 });
		} else {
			scroller.scrollTo(navItem, {});
		}
	};

	return (
		<Navbar expand='lg' variant='dark' expanded={isExpanded}>
			<Navbar.Brand
				onClick={() => {
					history.push('/');
					setExpanded(false);
				}}>
				<Logo />
			</Navbar.Brand>
			<Navbar.Toggle onClick={() => setExpanded(!isExpanded)}>
				{isExpanded ? <Cross /> : <Menu />}
			</Navbar.Toggle>
			<Navbar.Collapse>
				<Nav className='ml-auto'>
					<Nav.Link onClick={() => onNavClick('aboutUs')}>About Us</Nav.Link>
					<Nav.Link
						onClick={() => {
							setExpanded(false);
							scroll.scrollToTop({ delay: 0, duration: 100 });
							history.push('/blog');
						}}>
						Blog
					</Nav.Link>
					<Nav.Link onClick={() => onNavClick('faq')}>FAQ's</Nav.Link>
					<Nav.Link onClick={() => onNavClick('footer')}>Contact Us</Nav.Link>
					<Button
						onClick={() => {
							setExpanded(false);
							scroll.scrollToTop({ delay: 0, duration: 100 });
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
