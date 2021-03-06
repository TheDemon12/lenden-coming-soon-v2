import * as React from 'react';
import { ReactComponent as Books } from '../../icons/categories/book.svg';
import { ReactComponent as Mobiles } from '../../icons/categories/mobile.svg';
import { ReactComponent as GamingCd } from '../../icons/categories/cd.svg';
import { ReactComponent as GamingConsoles } from '../../icons/categories/console.svg';
import { ReactComponent as Accessories } from '../../icons/categories/accessory.svg';

export interface PostProductProps {}

const PostProduct: React.FC<PostProductProps> = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='container chooseCategory'>
			<h1>Choose a Category</h1>
			<div className='categoryContainer'>
				<div className='row'>
					<div
						className='col col-l'
						onClick={() =>
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLSfUC7fKnXXI0-GmbgTdDYTdwbf6EqVDyAxIRRFrn80GEB7dnw/viewform?vc=0&c=0&w=1&flr=0&gxids=7628'
							)
						}>
						<Books />
						<p>Books</p>
					</div>
					<div
						className='col'
						onClick={() =>
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLSe6eKPTNfCrckHkCNwA70Znhej4l5gWuYLoNAvy9NGPEzez7w/viewform?vc=0&c=0&w=1&flr=0&gxids=7628'
							)
						}>
						<Mobiles />
						<p>Mobiles</p>
					</div>
				</div>
				<div className='row'>
					<div
						className='col col-l'
						// style={{ borderBottom: 'none' }}
						onClick={() =>
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLScNHcK2ayarkFqrPT9t77j_T8IXLxYOf6ItV-qgvakbhYbkTw/viewform?vc=0&c=0&w=1&flr=0&gxids=7628'
							)
						}>
						<GamingCd />
						<p>Gaming CD's</p>
					</div>
					<div
						className='col'
						// style={{ borderBottom: 'none' }}
						onClick={() =>
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLSeZbgqjSGyCbZrOfZ3kSO97xZDNvpxvqpTssXYJVVmdvg-uGg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628'
							)
						}>
						<GamingConsoles />
						<p>Consoles</p>
					</div>
				</div>
				<div className='row'>
					<div
						className='col'
						style={{ borderBottom: 'none' }}
						onClick={() =>
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLScRgD2M_Ogo3QobrCDU2n4fQQSFVxEKPM2uDJW94vldF_wCkw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link'
							)
						}>
						<Accessories />
						<p>Accessories</p>
					</div>
				</div>
			</div>
			<section className='verification'>
				<h4>Must be read carefully</h4>
				<p>All the products will undergo two levels of verification:</p>
				<ul>
					<li>
						<span className='heading'>Level 1 : </span>Verification via photo
						angles.
					</li>
					<li>
						<span className='heading'>Level 2 : </span>Physical examination of
						the product at the time of pickup.
					</li>
				</ul>
				<p>
					On delivery, please check for a unique seal which is valid for 3 days.
					If you intend to return your product, please make sure you do not
					tamper with the seal.
				</p>
			</section>
		</div>
	);
};

export default PostProduct;
