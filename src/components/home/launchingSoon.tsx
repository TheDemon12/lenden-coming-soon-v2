import * as React from 'react';
import { ReactComponent as UnderConst } from '../../icons/under-const.svg';

export interface LaunchingSoonProps {}

const LaunchingSoon: React.FC<LaunchingSoonProps> = () => {
	return (
		<section className='launchingSoon'>
			<div className='ellipse'></div>
			<h2>
				This is just the product registration form, the main website is under
				construction and
				<span>launching soon!</span>
			</h2>
			<UnderConst />
		</section>
	);
};

export default LaunchingSoon;
