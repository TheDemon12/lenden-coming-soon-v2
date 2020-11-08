import * as React from 'react';

export interface SafetyInstructionsProps {}

const SafetyInstructions: React.FC<SafetyInstructionsProps> = () => {
	return (
		<div onClick={() => console.log('heh')} className='safetyInstructions'>
			<p>
				COVID - 19 Safety Instructions <span>•</span> No-contact delivery and
				pickup <span>•</span> Proper sanitization throughout the process{' '}
				<span>•</span> Regular checkup of our delivery teams
			</p>
		</div>
	);
};

export default SafetyInstructions;
