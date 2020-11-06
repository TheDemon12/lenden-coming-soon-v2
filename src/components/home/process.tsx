import * as React from 'react';
import { ReactComponent as BarterProcess } from '../../icons/barter-process.svg';

export interface ProcessProps {}

const Process: React.FC<ProcessProps> = () => {
	return (
		<section className='process'>
			<h2>LENDEN PROCESS</h2>
			<BarterProcess />
		</section>
	);
};

export default Process;
