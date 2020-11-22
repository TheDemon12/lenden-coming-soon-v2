import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export interface PageLoaderProps {}

const PageLoader: React.FC<PageLoaderProps> = () => {
	return (
		<div className='pageLoader'>
			<ClipLoader size={35} color={'#1a2639'} loading={true} />
		</div>
	);
};

export default PageLoader;
