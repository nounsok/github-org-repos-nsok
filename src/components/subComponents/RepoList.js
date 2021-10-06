import React, { useEffect, useState } from 'react';
import Repo from './Repo';
import { getRepos } from '../../gitAPI';

const RepoList = ({ org }) => {
	useEffect(() => {
		getRepos(org).then((response) => {
			setRepos(
				response.sort((a, b) => b.stargazers_count - a.stargazers_count)
			);
		});
	}, [org]);

	const [repos, setRepos] = useState([]);

	return (
		<div className='repo-list-container'>
			{repos.map((repo) => {
				return <Repo repo={repo} key={repo.id} />;
			})}
		</div>
	);
};

export default RepoList;
