import React, { Fragment } from 'react';
import Repo from './Repo';
import RepoPlaceholder from './RepoPlaceholder';

const RepoList = ({ repos }) => {
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
