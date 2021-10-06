import React, { useState } from 'react';
import Author from './subComponents/Author';
import RepoList from './subComponents/RepoList';

const Home = () => {
	const [org, setOrg] = useState('Netflix');
	return (
		<div className='container'>
			<div className='container2of3'>
				<RepoList org={org} />
			</div>
			<div className='container1of3'>
				<Author org={org} />
			</div>
		</div>
	);
};

export default Home;
