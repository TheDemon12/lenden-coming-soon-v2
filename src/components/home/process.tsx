import * as React from 'react';
import { ReactComponent as BarterProcess } from '../../icons/barter-process.svg';
import { ReactComponent as BarterProcessMobile } from '../../icons/barter-process-mobile.svg';

export interface ProcessProps {}

const Process: React.FC<ProcessProps> = () => {
	return (
		<section className='process'>
			<h2>LEN DEN PROCESS</h2>
			{window.innerWidth > 500 ? <BarterProcess /> : <BarterProcessMobile />}
		</section>
	);
};

export default Process;
