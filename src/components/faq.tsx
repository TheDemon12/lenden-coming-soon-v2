import * as React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { ReactComponent as Plus } from '../icons/plus.svg';
import { ReactComponent as Minus } from '../icons/minus.svg';

export interface FaqProps {}

const Faq: React.FC<FaqProps> = () => {
	const [activeKey, setActiveKey] = React.useState('');

	const faqs = [
		{ ques: 'Why to register your product?', ans: '' },
		{ ques: 'What is Len Den', ans: '' },
		{ ques: 'How will the product valuated', ans: '' },
		{ ques: 'When will the website launch', ans: '' },
		{ ques: 'What Products can we barter', ans: '' },
		{ ques: 'What products are prohibited on the website', ans: '' },
		{ ques: 'What is the status of my product', ans: '' },
		{ ques: 'How will the product get verified', ans: '' },
		{ ques: 'What are photo angles', ans: '' },
		{ ques: 'How will the payment be done ', ans: '' },
	];
	return (
		<section className='faq'>
			<div className='heading'>
				<h2>FAQ</h2>
			</div>
			<Accordion
				activeKey={activeKey}
				onSelect={key => {
					if (key) setActiveKey(key!.toString());
				}}>
				{faqs.map((faq, i) => (
					<Card key={i}>
						<Card.Header>
							<Accordion.Toggle as='div' eventKey={i.toString()}>
								{faq.ques}
								{i.toString() === activeKey ? <Minus /> : <Plus />}
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey={i.toString()}>
							<Card.Body>{faq.ans}</Card.Body>
						</Accordion.Collapse>
					</Card>
				))}
			</Accordion>
		</section>
	);
};

export default Faq;
