import * as React from 'react';
import { ReactComponent as Barter } from '../icons/barter.svg';

export interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
	return (
		<section className='banner'>
			<div className='title'>
				Your wants are precious to us. Tell us what you want and we’ll help you
				find it through barter.
			</div>
			<Barter />
		</section>
	);
};

export default Banner;
