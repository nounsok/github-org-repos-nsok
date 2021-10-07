import React, { useEffect, useState } from 'react';
import Commit from './Commit';
import { getCommits } from '../../gitAPI';

const CommitList = ({ org, repo }) => {
	useEffect(() => {
		getCommits(org, repo).then((response) => {
			setCommits(response);
		});
	}, [org, repo]);

	const [commits, setCommits] = useState([]);

	return (
		<div className='commit-list-container'>
			{commits.map((commit) => {
				return <Commit commit={commit} key={commit.sha} />;
			})}
		</div>
	);
};

export default CommitList;
