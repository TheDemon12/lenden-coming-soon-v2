import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
	const history = useHistory();
	return (
		<section className='aboutUs'>
			<h2>About us</h2>

			<p>
				Barter isn’t simply exchange, it is a way of living. We are here to
				introduce you to it.
			</p>

			<div className='message'>
				<div className='text'>
					Len Den wants to help you live a sustainable lifestyle by re-adopting
					barter. We have created a platform where you can get what you want by
					giving what you do not want anymore without paying any price.
					<Button onClick={() => history.push('/post-product')}>
						Register your Product
					</Button>
				</div>

				<img src='/plant.png' alt='' />
			</div>
		</section>
	);
};

export default AboutUs;
