import * as React from 'react';
import { ReactComponent as UnderConst } from '../../icons/under-const.svg';

export interface LaunchingSoonProps {}

const LaunchingSoon: React.FC<LaunchingSoonProps> = () => {
	return (
		<section className='launchingSoon'>
			<div className='ellipse'></div>
			<h2>
				The main website is under construction
				<span>Launching soon!</span>
			</h2>
			<UnderConst />
		</section>
	);
};

export default LaunchingSoon;
