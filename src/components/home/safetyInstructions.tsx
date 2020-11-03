import * as React from 'react';

export interface SafetyInstructionsProps {}

const SafetyInstructions: React.FC<SafetyInstructionsProps> = () => {
	return (
		<div onClick={() => console.log('heh')} className='safetyInstructions'>
			COVID - 19 Safety Instructions
		</div>
	);
};

export default SafetyInstructions;
