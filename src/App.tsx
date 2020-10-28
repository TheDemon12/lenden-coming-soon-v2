import React from 'react';
import {
	Accordion,
	Button,
	Card,
	Container,
	Nav,
	Navbar,
	NavDropdown,
} from 'react-bootstrap';
import { ReactComponent as Barter } from './icons/barter.svg';
import { ReactComponent as Tick } from './icons/tick.svg';
import { ReactComponent as Plus } from './icons/plus.svg';
import { ReactComponent as Minus } from './icons/minus.svg';
import { ReactComponent as Facebook } from './icons/facebook.svg';
import { ReactComponent as Instagram } from './icons/instagram.svg';
import { ReactComponent as Linkedin } from './icons/linkedin.svg';
import { ReactComponent as Twitter } from './icons/twitter.svg';

function App() {
	return (
		<React.Fragment>
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

			<section className='banner'>
				<div className='title'>
					Your wants are precious to us. Tell us what you want and we’ll help
					you find it through barter.
				</div>
				<Barter />
			</section>

			<section className='about-us'>
				<div className='heading'>
					<h2>About us</h2>
				</div>

				<div className='motto'>
					<p>
						Barter isn’t simply exchange, it is a way of living. We are here to
						introduce you to it.
					</p>
				</div>

				<div className='message'>
					<div className='text'>
						Len Den wants to help you live a sustainable lifestyle by
						re-adopting barter. We have created a platform where you can get
						what you want by giving what you do not want anymore without paying
						any price.
						<Button>Register your Product</Button>
					</div>
					<div className='image'>
						<img src='/plant.png' alt='' />
					</div>
				</div>
			</section>

			<section className='register'>
				<h2>Yes, it is that simple! Want to try it out ?</h2>
				<Button>Register your Product</Button>
				<div className='info'>
					<div>
						<Tick />
						Lorem ipsum dolor sit amet.
					</div>
					<div>
						<Tick />
						Lorem ipsum dolor sit amet.
					</div>
					<div>
						<Tick />
						Lorem ipsum dolor sit amet.
					</div>
				</div>
			</section>
			<section className='faq'>
				<div className='heading'>
					<h2>FAQ</h2>
				</div>
				<Accordion>
					{new Array(5).fill(0).map((_a, i) => (
						<Card>
							<Card.Header>
								<Accordion.Toggle as='div' eventKey={i.toString()}>
									Why to register your product?
									<Plus />
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey={i.toString()}>
								<Card.Body>Hello! I'm the body</Card.Body>
							</Accordion.Collapse>
						</Card>
					))}
				</Accordion>
			</section>

			<section className='footer'>
				<div className='info'>
					<div className='logo'>LOGO</div>
					<div className='links'>
						<div>Company</div>
						<div>Career</div>
					</div>
					<div className='links'>
						<div>Pricing for teams</div>
						<div>Gift Cards</div>
						<div>Contact & Help</div>
					</div>
					<div className='social'>
						<div className='row'>
							<Twitter />
							<Linkedin />
						</div>
						<div className='row'>
							<Instagram />
							<Facebook />
						</div>
					</div>
				</div>

				<div className='navigation'>
					<div>© Lenden 2020</div>
					<div>Sitemap</div>
					<div>Disclaimer</div>
					<div>User Privacy</div>
					<div>Terms</div>
					<div>Applicant Privacy</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default App;
