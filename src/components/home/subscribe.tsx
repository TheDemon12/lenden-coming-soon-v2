import * as React from 'react';
import Joi from 'joi';
import { FormControl, InputGroup } from 'react-bootstrap';
import http from '../../services/httpService';
import { ClipLoader } from 'react-spinners';

export interface SubscribeProps {}

export interface SubscribeState {
	email: string;
	error: string;
	success: string;
	loading: boolean;
}

class Subscribe extends React.Component<SubscribeProps, SubscribeState> {
	state = { email: '', error: '', success: '', loading: false };
	schema = {
		email: Joi.string().email({ tlds: false }).required().label('Email'),
	};

	onSubmit = async () => {
		this.setState({ loading: true, success: '', error: '' });
		const { error } = Joi.object(this.schema).validate({
			email: this.state.email,
		});
		if (error)
			return this.setState({ error: error.details[0].message, loading: false });

		try {
			await http.post('https://api2.lendenindia.in/lenden/addemail', {
				email: this.state.email,
			});
			this.setState({ loading: false, success: "We've received your email!" });
		} catch (ex) {
			this.setState({ loading: false });
			if (ex.response.status === 400)
				return this.setState({
					error: 'You have already been subscribed!',
				});
			this.setState({ error: ex.response.data.message });
		}
	};

	render() {
		return (
			<section className='subscribe'>
				<h2>Subscribe to our Newsletter!</h2>
				<p>Care to barter your email address for our newsletters?</p>
				<InputGroup className='emailBox'>
					<FormControl
						placeholder='Your email'
						aria-label='Your email'
						aria-describedby='email'
						value={this.state.email}
						onChange={e => this.setState({ email: e.currentTarget.value })}
					/>
					<InputGroup.Append>
						<InputGroup.Text className='subscribeBtn' onClick={this.onSubmit}>
							Sign up
						</InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>

				{this.state.loading && (
					<div className='loader'>
						<ClipLoader size={35} color={'#fff'} loading={true} />
					</div>
				)}

				{this.state.error && (
					<div className='error-message'>{this.state.error}</div>
				)}
				{this.state.success && (
					<div className='success-message'>{this.state.success}</div>
				)}
			</section>
		);
	}
}

export default Subscribe;
