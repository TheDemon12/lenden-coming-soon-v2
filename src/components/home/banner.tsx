import * as React from 'react';
import { ReactComponent as Barter } from '../../icons/barter.svg';
import { ReactComponent as Bg } from '../../icons/bg.svg';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
	const history = useHistory();
	return (
		<section className='banner'>
			<div className='title'>
				<span>Your wants are precious to us.</span>
				Tell us what you want and we will help you find it through barter.
				<Button
					onClick={() => {
						scroll.scrollToTop({ delay: 0, duration: 100 });
						history.push('/post-product');
					}}>
					Register your product
				</Button>
			</div>
			<Barter className='barter' />
			<Bg className='bg' />
		</section>
	);
};

export default Banner;
