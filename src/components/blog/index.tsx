import * as React from 'react';
import BlogBox from './blogBox';

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
	return (
		<div className='blog'>
			{/* <h1 className='title'>Blog</h1> */}
			<h4>Latest Topics</h4>
			<BlogBox
				title='A Welcome Note'
				description='What if we told you that your world might not completely revolve around cash anymore? What if you would not have to look at your purse every time you want something? Sounds like a dream, right? Well, guess what, it is not a dream anymore! The solution to all your problems can now be traced back to barter.
					Barter as a practice was initiated in the 6000 BCE throughout the world. Even though it was resumed in the 1930s during the Great Depression in some parts of the world, it largely remained discontinued in most of the parts of the world.
					All of us can admit that our lives have been governed by cash in one way or another, thanks to capitalism. The worst part is that it makes us believe that there are no other options and that is partially the reason why we view everything in terms of money.'
				index={1}
				image='/blog1.png'
			/>
		</div>
	);
};

export default Blog;
