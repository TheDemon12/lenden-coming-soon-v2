import * as React from 'react';
import { ReactComponent as Barter } from '../../icons/barter.svg';
import { ReactComponent as Bg } from '../../icons/bg.svg';
import { Button } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

export interface BannerProps extends RouteComponentProps {}

const Banner: React.FC<BannerProps> = props => {
	return (
		<section className='banner'>
			<div className='title'>
				<span>Your wants are precious to us.</span>
				Tell us what you want and we will help you find it through barter.
				<Button onClick={() => props.history.push('/post-product')}>
					Register your Product
				</Button>
			</div>
			<Barter className='barter' />
			<Bg className='bg' />
		</section>
	);
};

export default Banner;
