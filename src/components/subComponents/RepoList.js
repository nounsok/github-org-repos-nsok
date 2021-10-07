import React, { Fragment, useEffect, useState } from 'react';
import Repo from './Repo';
import RepoPlaceholder from './RepoPlaceholder';
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
		<Fragment>
			{repos.length === 0 ? (
				<div className='repo-list-container'>
					<RepoPlaceholder />
					<RepoPlaceholder />
					<RepoPlaceholder />
					<RepoPlaceholder />
					<RepoPlaceholder />
					<RepoPlaceholder />
				</div>
			) : (
				<div className='repo-list-container'>
					{repos.map((repo) => {
						return <Repo repo={repo} key={repo.id} />;
					})}
				</div>
			)}
		</Fragment>
	);
};

export default RepoList;
