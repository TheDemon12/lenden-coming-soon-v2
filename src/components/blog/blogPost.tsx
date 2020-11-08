import * as React from 'react';

export interface BlogPostProps {}

const BlogPost: React.FC<BlogPostProps> = () => {
	return (
		<div className='blogPost'>
			<img src='http://placekitten.com/800/800' alt='' />
			<h1>A Welcome Note</h1>
			<h4>
				8 Nov, 2020 <span>By Lorem Ipsum.</span>
			</h4>
			<p>
				What if we told you that your world might not completely revolve around
				cash anymore? What if you would not have to look at your purse everytime
				you want something? Sounds like a dream, right? Well guess what, it is
				not a dream anymore! The solution to all your problems can now be traced
				back to barter.
			</p>
			<p>
				Barter as a practice, was initiated in the 6000 BCE throughout the
				world. Even though it was resumed in the 1930s during the Great
				Depression in some parts of the world, it largely remained discontinued
				in most of the parts of the world.
			</p>
			<p>
				All of us can admit that our lives have been governed by cash in one way
				or another, thanks to capitalism. The worst part is that it makes us
				believe that there are no other options and that is partially the reason
				why we view everything in terms of money.
			</p>
			<p>
				As an idea opposed to barter, cash has significantly become a deciding
				factor for a lot of things in our day-to-day lives : the healthcare
				facilities we get, the things we want, the things we eat, wear, and many
				more. However, the pandemic has limited this deciding factor and in
				turn, forced us to limit our wants.
			</p>
			<p>
				Human beings have unlimited and recurring wants. If I want a mobile
				phone today, sooner or later I will crave the existence of a laptop or a
				pair of nice earphones or a cover. Once I buy all of them, I would
				either want an upgraded version of these or move on to some other new
				category but one thing that is certain is, I will have wants no matter
				what.
			</p>
			<p>
				While constantly trying to satisfy our wants, we are forgetting that
				what we need the most is a sustainable way to find constructive
				solutions to such problems. We are constantly running towards things
				which provide us with immediate gratification but what we fail to
				understand is that we are all in this together for a long time. Instead
				of looking for quick, short term solutions to our problems, we need to
				look for long term and assuring solutions which can help us all in a
				sustainable manner because after all, we are all in this together.
			</p>
			<p>
				What we want for you is to stop limiting your wants and start looking
				for sustainable alternatives to cash in order to fulfill them. You
				guessed it right, one such alternative is Len Den.
			</p>
			<p>
				Our team aims at helping you in getting what you want without feeling
				guilty for not having enough cash and at the same time, help the
				environment in bearing a lighter load of our wants.
			</p>
			<p>
				Barter’s future now lies in our hands. Your choice to barter is not only
				going to be your first step towards a new life but also a footprint for
				all those who want to take their first step towards a sustainable life
				too. Len Den is here to encourage you to leave your mark and start your
				barter journey. We hope that with time, all of us can learn and unlearn
				to do things differently.
			</p>
			<p>
				Remember that your choice to barter is going to matter, always. Register
				your product, take your first step HERE.
			</p>
			<p>
				Just like you, even our company is taking the first step. Our main
				website is under construction and our social media is now active and
				running. We are always there to help you with any and every difficulty
				you face no matter how big or small it is. You can reach out to us at
				<span
					style={{ cursor: 'pointer' }}
					onClick={() => window.open('mailto:info@lendenindia.in"')}>
					{' info@lendenindia.in '}
				</span>
				or through our social media handles mentioned below.
			</p>
			<p>
				Thank you for making it until the end of this welcome note. With this,
				we hope you try out all that the barter world has to offer you with the
				help of Len Den. Keep smiling, keep swapping.
			</p>
			<p>Warm hugs from Team Len Den</p>
		</div>
	);
};

export default BlogPost;
