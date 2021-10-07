import React, { useState, useEffect, Fragment } from 'react';
import Author from './subComponents/Author';
import RepoList from './subComponents/RepoList';
import Spinner from './subComponents/Spinner';
import { getAuthor } from './../gitAPI';

const Home = ({ org }) => {
	const [author, setAuthor] = useState({});

	useEffect(() => {
		getAuthor(org).then((response) => setAuthor(response));
	}, [org]);

	return (
		<Fragment>
			{Object.keys(author).length === 0 ? <Spinner /> : null}
			<div className='container'>
				<div className='container2of3'>
					<RepoList org={org} />
				</div>
				<div className='container1of3'>
					<Author author={author} />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
