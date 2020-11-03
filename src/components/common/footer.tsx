import * as React from 'react';
import { scroller, animateScroll as scroll } from 'react-scroll';

import { ReactComponent as Facebook } from '../../icons/facebook.svg';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../icons/linkedin.svg';
// import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { Modal, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
	const [tnc, setTnc] = React.useState(false);
	const [privacyPolicy, setPrivacyPolicy] = React.useState(false);
	const history = useHistory();
	const { pathname } = useLocation();

	return (
		<section className='footer'>
			<div className='info'>
				<div
					className='logo'
					onClick={() => {
						scroll.scrollToTop({ delay: 0, duration: 100 });
						history.push('/');
					}}>
					<Logo />
				</div>
				<div className='links'>
					<div>Menu</div>
					<div
						onClick={async () => {
							if (pathname !== '/') await history.push('/');
							scroller.scrollTo('aboutUs', {});
						}}>
						About Us
					</div>
					<div
						onClick={() => {
							scroll.scrollToTop({ delay: 0, duration: 100 });
							history.push('/blog');
						}}>
						Blog
					</div>
					<div
						onClick={async () => {
							if (pathname !== '/') await history.push('/');
							scroller.scrollTo('faq', {});
						}}>
						FAQ's
					</div>
				</div>
				<div className='links'>
					<div>Terms & Conditions</div>
					<div onClick={() => setTnc(true)}>Terms of Service</div>
					<div onClick={() => setPrivacyPolicy(true)}>Privacy Policy</div>
					{/* <div>Cookie Policy</div>
					<div>Refund Policy</div> */}
				</div>
				<div className='links'>
					<div>Contact Us</div>
					<div>+91 XXXXXXXXXX</div>
					<div>Circular Leaf Ventures Pvt Ltd,</div>
					<div>26/84 West Patel Nagar, New Delhi - 110008, India.</div>
					<div onClick={() => window.open('mailto:info@lendenindia.in"')}>
						info@lendenindia.in
					</div>
				</div>
				<div className='social'>
					{/* <div className='row'>
						<Linkedin
							onClick={() =>
								window.open(
									'https://www.linkedin.com/company/lendenindia/?viewAsMember=true'
								)
							}
						/>
					</div> */}
					<div className='row'>
						<Instagram
							onClick={() =>
								window.open('https://www.instagram.com/lendenindia/?hl=en')
							}
						/>
						<Facebook
							onClick={() =>
								window.open('https://www.facebook.com/lendenindia')
							}
						/>
						<Linkedin
							onClick={() =>
								window.open(
									'https://www.linkedin.com/company/lendenindia/?viewAsMember=true'
								)
							}
						/>
					</div>
				</div>
			</div>

			{/* <div className='navigation'>
				<div>© Lenden 2020</div>
				<div>Sitemap</div>
				<div>Disclaimer</div>
				<div>User Privacy</div>
				<div>Terms</div>
				<div>Applicant Privacy</div>
			</div> */}

			<Modal show={tnc} onHide={() => setTnc(false)} size='lg' centered>
				<Modal.Header closeButton>
					<Modal.Title>Terms and conditions</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ol title='Terms of Use'>
						<li>
							Please note that duplicate products of original brands and any
							other illegal products are strictly prohibited and won’t be
							accepted.
						</li>
						<li>
							A seal will be attached to the product. Please ensure that you do
							not remove the seal for 3 days. During the period of 3 days, you
							will not be able to modify, sell or barter the product you have
							received. This 3 day period is given to the customers to verify
							and satisfy themselves with the barter that has happened.
						</li>
						<li>
							The product must belong to the rightful owner of the product. If
							it is found that the product is stolen, strict legal action will
							be taken against the person.
						</li>
						<li>
							The products should not have any kind of illegal content such as
							child porn or any other such content. If such content is found on
							an individual’s device, we are bound to take strict legal action
							against the user.
						</li>
						<li>
							The value of the products can be changed or modified at any point
							of time.
						</li>
						<li>
							The valuation and verification methods cannot be challenged as
							they are unique to Len Den. Please note that these won’t be
							disclosed due to our policies.
						</li>
						<li>
							Delivery prices will be incurred by both the users. It will be
							calculated and will be communicated once the barter is confirmed
						</li>
						<li>
							In case of indemnification, i.e., if the product is damaged or
							broken during the delivery Len Den won’t be responsible for any
							damage in transit or the whole process. In such a case, no
							payments will be done or given by the company.
						</li>
						<li>
							The price of the delivery will be fixed and shall be paid once the
							barter is initiated.
						</li>
						<li>
							No refunds will be made once the payment is done or once the
							pickup is initiated .
						</li>
						<li>
							If the barter is cancelled and return is initiated both the
							parties will have to pay the delivery fees.
						</li>
						<li>
							Any update on the website can be done without any prior notice.
						</li>
						<li>
							The content is the property of Circular Leaf, it can only be used
							for materialistic purposes and should not be taken in any other
							way.
						</li>
						<li>Age for the use of service is strictly 12+.</li>
					</ol>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => setTnc(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal
				show={privacyPolicy}
				onHide={() => setPrivacyPolicy(false)}
				size='lg'
				centered>
				<Modal.Header closeButton>
					<Modal.Title>Privacy Policy</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					We value the trust you place in us. That’s why we insist upon the
					highest standards for secure transactions and customer information
					privacy. Please read the following statement to learn about our
					information gathering and dissemination practices.
					<br />
					<b>Note:</b> By using or visiting the Lenden or any services provided
					to you on, from, or through Circular Leaf Ventures Pvt. Ltd.
					(collectively the “Service”) you signify your agreement to:
					<ol>
						<li>
							the terms and conditions of Service (the “Terms of Service”) found
							at [www.lendenindia.in] and incorporated herein by reference.
						</li>
						<li> this Privacy Policy and</li>
						<li>
							Lenden Terms of Use of the Website, found at [www.Lendenindia.in]
							also incorporated herein by reference. If you do not agree to any
							of these terms, By visiting this Website you agree to be bound by
							the terms and conditions of this Privacy Policy. If you do not
							agree please do not use or access this Website.
						</li>
					</ol>
					By mere use of the Website, you expressly consent to our use and
					disclosure of your personal information in accordance with this
					Privacy Policy. This Privacy Policy is incorporated into and subject
					to the Terms of Use.
					<ol>
						<li>
							<h1>
								Collection of Personally Identifiable Information and other
								Information
							</h1>
							<p>
								When you use our Website, we collect and store your personal
								information which is provided by you from time to time. Our
								primary goal in doing so is to provide you a safe, efficient,
								smooth and customized experience. This allows us to provide
								services and features that most likely meet your needs, and to
								customize our Website to make your experience safer and easier.
								More importantly, while doing so we collect personal information
								from you that we consider necessary for achieving this purpose.
							</p>
							<p>
								In general, you can browse the Website without telling us who
								you are or revealing any personal information about yourself.
								Once you give us your personal information, you are not
								anonymous to us. Where possible, we indicate which fields are
								required and which fields are optional. You always have the
								option to not provide information by choosing not to use a
								particular service or feature on the Website. We may
								automatically track certain information about you based upon
								your behaviour on our Website. We use this information to do
								internal research on our users’ demographics, interests, and
								behaviour to better understand, protect and serve our users.
								This information is compiled and analysed on an aggregated
								basis. This information may include the URL that you just came
								from (whether this URL is on our Website or not), which URL you
								next go to (whether this URL is on our Website or not), your
								computer browser information, and your IP address.
							</p>
							<p>
								We use data collection devices such as “cookies” on certain
								pages of the Website to help analyse our web page flow, measure
								promotional effectiveness, and promote trust and safety.
								“Cookies” are small files placed on your hard drive that assist
								us in providing our services. We offer certain features that are
								only available through the use of a “cookie”.
							</p>
							<p>
								We also use cookies to allow you to enter your password less
								frequently during a session. Cookies can also help us provide
								information that is targeted to your interests. Most cookies are
								“session cookies,” meaning that they are automatically deleted
								from your hard drive at the end of a session. You are always
								free to decline our cookies if your browser permits, although in
								that case you may not be able to use certain features on the
								Website and you may be required to re-enter your password more
								frequently during a session.
							</p>
							<p>
								Additionally, you may encounter “cookies” or other similar
								devices on certain pages of the Website that are placed by third
								parties. We do not control the use of cookies by third parties.
								If you choose to buy any Service on the Website, we collect
								information about your buying behaviour.
							</p>
							<p>
								If you transact with us, we collect some additional information,
								such as a billing address, a credit / debit card number and a
								credit / debit card expiration date and/ or other payment
								instrument details and tracking information from cheques or
								money orders.
							</p>
							<p>
								If you choose to post messages on our message boards, chat rooms
								or other message areas or leave feedback, we will collect that
								information you provide to us. We retain this information as
								necessary to resolve disputes, provide customer support and
								troubleshoot problems as permitted by law.
							</p>
							<p>
								If you send us personal correspondence, such as emails or
								letters, or if other users or third parties send us
								correspondence about your activities or postings on the Website,
								we may collect such information into a file specific to you.
							</p>
							<p>
								We collect personally identifiable information (email address,
								name, phone number, credit card / debit card / other payment
								instrument details, etc.) from you when you set up a free
								account with us. While you can browse some sections of our
								Website without being a registered member, certain activities
								(such as placing an order) do require registration. We do use
								your contact information to send you offers based on your
								previous orders and your interests.
							</p>
						</li>
						<li>
							<h1>Use of Demographic / Profile Data / Your Information</h1>
							<p>
								We use personal information to provide the services you request.
								To the extent we use your personal information to market to you,
								we will provide you the ability to opt-out of such uses. We use
								your personal information to resolve disputes; troubleshoot
								problems; help promote a safe service; collect money; measure
								consumer interest in our products and services, inform you about
								online and offline offers, products, services, and updates;
								customize your experience; detect and protect us against error,
								fraud and other criminal activity; enforce our terms and
								conditions; and as otherwise described to you at the time of
								collection.
							</p>
							<p>
								In our efforts to continually improve our product and service
								offerings, we collect and analyse demographic and profile data
								about our users’ activity on our website. We identify and use
								your IP address to help diagnose problems with our server, and
								to administer our Website. Your IP address is also used to help
								identify you and to gather broad demographic information.
							</p>
							<p>
								We will occasionally ask you to complete optional online
								surveys. These surveys may ask you for contact information and
								demographic information (like zip code, age, or income level).
								We use this data to tailor your experience at our Website,
								providing you with content that we think you might be interested
								in and to display content according to your preferences.
								Cookies:
							</p>
							<p>
								A “cookie” is a small piece of information stored by a web
								server on a web browser so it can be later read back from that
								browser. Cookies are useful for enabling the browser to remember
								information specific to a given user. We place both permanent
								and temporary cookies in your computer’s hard drive. The cookies
								do not contain any of your personally identifiable information.
							</p>
						</li>
						<li>
							<h1>Sharing of personal information</h1>
							<p>
								We may share any personal information with our other corporate
								entities and affiliates to help detect and prevent identity
								theft, fraud and other potentially illegal acts; correlate
								related or multiple accounts to prevent abuse of our services;
								and to facilitate joint or co-branded services that you request
								where such services are provided by more than one corporate
								entity. Those entities and affiliates may not market to you as a
								result of such sharing unless you explicitly opt-in.
							</p>
							<p>
								We may disclose personal information if required to do so by law
								or in the good faith belief that such disclosure is reasonably
								necessary to respond to subpoenas, court orders, or other legal
								process. We may disclose personal information to law enforcement
								offices, third party rights owners, or others in the good faith
								belief that such disclosure is reasonably necessary to: enforce
								our Terms or Privacy Policy; respond to claims that an
								advertisement, posting or other content violates the rights of a
								third party; or protect the rights, property or personal safety
								of our users or the general public.
							</p>
							<p>
								We and our affiliates will share / sell some or all of your
								personal information with another business entity should we (or
								our assets) plan to merge with, or be acquired by that business
								entity, or re-organization, amalgamation, restructuring of
								business. Should such a transaction occur that other business
								entity (or the new combined entity) will be required to follow
								this privacy policy with respect to your personal information.
							</p>
						</li>
						<li>
							<h1>Links to Other Sites</h1>
							<p>
								Our Website links to other websites that may collect personally
								identifiable information about you. Lendenindia.in is not
								responsible for the privacy practices or the content of those
								linked websites.
							</p>
						</li>
						<li>
							<h1> Security Precautions</h1>
							<p>
								Our Website has stringent security measures in place to protect
								the loss, misuse, and alteration of the information under our
								control. Whenever you change or access your account information,
								we offer the use of a secure server. Once your information is in
								our possession we adhere to strict security guidelines,
								protecting it against unauthorized access.
							</p>
						</li>
						<li>
							<h1>Choice/Opt-Out</h1>
							<p>
								We provide all users with the opportunity to opt-out of
								receiving non-essential (promotional, marketing-related)
								communications from us on behalf of our partners, and from us in
								general, after setting up an account.
							</p>
							<p>
								If you want to remove your contact information from all
								Lendenindia.in lists and newsletters, please write to
								info@lendenindia.in and we will do that for you.
							</p>
						</li>
						<li>
							<h1>Your Consent</h1>
							<p>
								By using the Website and/ or by providing your information, you
								consent to the collection and use of the information you
								disclose on the Website in accordance with this Privacy Policy,
								including but not limited to Your consent for sharing your
								information as per this privacy policy. If we decide to change
								our privacy policy, we will post those changes on this page so
								that you are always aware of what information we collect, how we
								use it, and under what circumstances we disclose it.
							</p>
						</li>
						<li>
							<h1>Grievance Officer</h1>
							<p>
								In accordance with Information Technology Act 2000 and rules
								made there under, the name and contact details of the concerned
								officer are provided below:
							</p>
							<p>
								Manager
								<br />
								Circular Leaf Ventures Pvt Ltd
								<br />
								26/84 West Patel Nagar, New Delhi - 110008, India.
								<br />
								<b>Phone:</b> <br />
								<b>Email:</b> info@lendenindia.in
								<br />
								<b>Time:</b> Mon to Sat (10:30 to 6:30)
							</p>
						</li>
					</ol>
					Questions? Please contact us at info@lendenindia.in regarding any
					questions regarding this statement.
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => setPrivacyPolicy(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</section>
	);
};

export default Footer;
