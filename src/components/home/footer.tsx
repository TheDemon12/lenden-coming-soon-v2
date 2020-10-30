import * as React from 'react';
import { scroller } from 'react-scroll';

import { ReactComponent as Facebook } from '../../icons/facebook.svg';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
	return (
		<section className='footer'>
			<div className='info'>
				<div className='logo'>LOGO</div>
				<div className='links'>
					<div>Menu</div>
					<div onClick={() => scroller.scrollTo('aboutUs', {})}>About Us</div>
					{/* <div>Blog</div> */}
					<div onClick={() => scroller.scrollTo('faq', {})}>FAQ's</div>
				</div>
				<div className='links'>
					<div>Terms & Conditions</div>
					<div>Terms of Service</div>
					{/* <div>Privacy Policy</div>
					<div>Cookie Policy</div>
					<div>Refund Policy</div> */}
				</div>
				<div className='links'>
					<div>Contact Us</div>
					<div>+91 XXXXXXXXXX</div>
					<div>West Patel Nagar, Delhi-110008</div>
					<div onClick={() => window.open('mailto:info@lendenindia.in"')}>
						info@lendenindia.in
					</div>
				</div>
				<div className='social'>
					<div className='row'>
						<Twitter />
						<Linkedin
							onClick={() =>
								window.open(
									'https://www.linkedin.com/company/lendenindia/?viewAsMember=true'
								)
							}
						/>
					</div>
					<div className='row'>
						<Instagram
							onClick={() =>
								window.open('https://www.instagram.com/lendenindia/?hl=en')
							}
						/>
						<Facebook
							onClick={() =>
								window.open('https://www.facebook.com/lendenindia')
							}
						/>
					</div>
				</div>
			</div>

			{/* <div className='navigation'>
				<div>© Lenden 2020</div>
				<div>Sitemap</div>
				<div>Disclaimer</div>
				<div>User Privacy</div>
				<div>Terms</div>
				<div>Applicant Privacy</div>
			</div> */}
		</section>
	);
};

export default Footer;
