import * as React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { ReactComponent as Plus } from '../icons/plus.svg';

export interface FaqProps {}

const Faq: React.FC<FaqProps> = () => {
	return (
		<section className='faq'>
			<div className='heading'>
				<h2>FAQ</h2>
			</div>
			<Accordion>
				{new Array(5).fill(0).map((_a, i) => (
					<Card>
						<Card.Header>
							<Accordion.Toggle as='div' eventKey={i.toString()}>
								Why to register your product?
								<Plus />
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey={i.toString()}>
							<Card.Body>Hello! I'm the body</Card.Body>
						</Accordion.Collapse>
					</Card>
				))}
			</Accordion>
		</section>
	);
};

export default Faq;
