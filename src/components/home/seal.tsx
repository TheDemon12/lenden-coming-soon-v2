import * as React from 'react';
import { ReactComponent as SealIcon } from '../../icons/seal.svg';

export interface SealProps {}

const Seal: React.FC<SealProps> = () => {
	return (
		<section className='seal'>
			<div className='innerContainer'>
				<p>
					A unique seal will be attached to your product. Returns will be
					initiated within 3 days only if the seal is intact.
				</p>
				<SealIcon />
			</div>
		</section>
	);
};

export default Seal;
