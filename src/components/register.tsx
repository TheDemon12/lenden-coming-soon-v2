import * as React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as Tick } from '../icons/tick.svg';

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
	return (
		<section className='register'>
			<h2>Yes, it is that simple! Want to try it out ?</h2>
			<Button>Register your Product</Button>
			<div className='info'>
				<div>
					<Tick />
					Lorem ipsum dolor sit amet.
				</div>
				<div>
					<Tick />
					Lorem ipsum dolor sit amet.
				</div>
				<div>
					<Tick />
					Lorem ipsum dolor sit amet.
				</div>
			</div>
		</section>
	);
};

export default Register;
