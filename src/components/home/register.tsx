import * as React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as Tick } from '../../icons/tick.svg';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
	const history = useHistory();

	return (
		<section className='register'>
			<h2>
				<span>Yes, it is that simple!</span> Want to try it out ?
			</h2>
			<Button
				onClick={() => {
					scroll.scrollToTop({ delay: 0, duration: 100 });
					history.push('/post-product');
				}}>
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
