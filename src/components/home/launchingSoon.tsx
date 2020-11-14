import * as React from 'react';
import { ReactComponent as UnderConst } from '../../icons/under-const.svg';

export interface LaunchingSoonProps {}

const LaunchingSoon: React.FC<LaunchingSoonProps> = () => {
	return (
		<section className='launchingSoon'>
			<div className='ellipse'></div>
			<h2>
				<span className='first'>T</span>he main website is under construction.
				<span className='soon'>Launching soon!</span>
			</h2>
			<UnderConst />
		</section>
	);
};

export default LaunchingSoon;
