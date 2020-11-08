import * as React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { ReactComponent as Minus } from '../../icons/minus.svg';

export interface FaqProps {}

const Faq: React.FC<FaqProps> = () => {
	const [activeKey, setActiveKey] = React.useState('');

	const faqs = [
		{
			ques: 'Why should I choose to barter with Len Den?',
			ans:
				'With Len Den, you are adopting a new way of living that is sustainable, less cash dependent, reliable and fun. We are here to fulfill your wishes by giving you a fair and suitable product match',
		},
		{
			ques: 'What is the process of bartering with Len Den?',
			ans:
				'Once you register your product with us, we will get in touch with you. Our team will send you personalized options and assist you throughout the process',
		},
		{
			ques: 'Why register your product?',
			ans:
				'By registering your product, you can get whatever you want in exchange without spending money on it using our hassle free process',
		},
		{
			ques: 'What are the products that I can barter/get in return?',
			ans: `So far, we are having the following categories:
		Books,
		Mobile Phones,
		Gaming Consoles,
		Gaming CDs,
		Gaming Accessories,
		Mobile Accessories,
		PC/Laptop Accessories
		`,
		},
		{
			ques: 'What products are prohibited on the website?',
			ans:
				'Any product that is illegal in nature such as Guns, drugs etc are prohibited on the website. To know more please check our terms of use.',
		},
		{
			ques: 'On what basis will I get a value for my product?',
			ans:
				'Your product will be given a fair value using our unique valuation system which takes into consideration a lot of factors such as condition, age, market value and many more.',
		},
		{
			ques: 'What are photo angles?',
			ans:
				'Photo angles are a prerequisite for getting your product verified with Len Den. By providing us with the correct photo angles, you will help us in understanding the condition of your product.',
		},
		{
			ques: 'How will the product get verified?',
			ans:
				'After registering your product, we will verify it by cross checking all the details mentioned and the photo angles attached under Level 1 Verification. Level 2 Verification includes physical examination at the time of pickup.',
		},
		{
			ques: 'How will I pay Len Den for its services?',
			ans:
				'Once your barter is confirmed, you will get a link for making online payments via PayTM or UPI.',
		},
		{
			ques: 'How will I track the status of my product?',
			ans:
				'Through WhatsApp and email, you will be able to get a hold of the status of your product. For any further queries, WhatsApp will be your go-to.',
		},
	];
	return (
		<section className='faq'>
			<h2>Frequently Asked Questions (FAQ's)</h2>

			<Accordion
				activeKey={activeKey}
				onSelect={key => {
					if (key) setActiveKey(key!.toString());
					else setActiveKey('');
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
