import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { scroller, animateScroll as scroll } from 'react-scroll';

export interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
	const history = useHistory();
	return (
		<section className='aboutUs'>
			<h2>About us</h2>
			<p className='mainline'>
				<span className='pre-text'>Barter</span> isn’t simply exchange, it is a
				way of living.
			</p>
			<p className='subLine'>We are here to introduce you to it.</p>
			<div className='message'>
				<div className='text'>
					Len Den wants to help you live a sustainable lifestyle by re-adopting
					barter. We are creating a platform where you can get what you want by
					giving what you do not want anymore.
					<Button
						onClick={() => {
							scroll.scrollToTop({ delay: 0, duration: 100 });
							history.push('/post-product');
						}}>
						Register your product
					</Button>
				</div>

				<img src='/aboutUs.jpg' alt='' />
			</div>
		</section>
	);
};

export default AboutUs;
