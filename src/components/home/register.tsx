import * as React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as Tick } from '../../icons/tick.svg';
import { RouteComponentProps } from 'react-router-dom';

export interface RegisterProps extends RouteComponentProps {}

const Register: React.FC<RegisterProps> = props => {
	return (
		<section className='register'>
			<h2>Yes, it is that simple! Want to try it out ?</h2>
			<Button onClick={() => props.history.push('/post-product')}>
				Register your Product
			</Button>
			<div className='info'>
				<div>
					<Tick />
					Get a fair value for your product
				</div>
				<div>
					<Tick />
					Adopt a sustainable lifestyle
				</div>
				<div>
					<Tick />
					Become less cash dependent
				</div>
			</div>
		</section>
	);
};

export default Register;