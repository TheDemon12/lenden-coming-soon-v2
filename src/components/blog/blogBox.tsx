import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export interface BlogBoxProps {
	title: string;
	description: string;
	index: number;
	image: string;
}

const BlogBox: React.FC<BlogBoxProps> = props => {
	const history = useHistory();

	return (
		<div className='blogBox'>
			<div className='imageBox'>
				<img src={props.image} />
			</div>
			<div className='blogInfo'>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<Button onClick={() => history.push(`/blog/${props.index}`)}>
					Continue Reading
				</Button>
			</div>
		</div>
	);
};

export default BlogBox;
