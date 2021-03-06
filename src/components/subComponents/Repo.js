import React, { Fragment } from 'react';
import CommitList from './CommitList';
import { useState } from 'react';

const Repo = ({ repo }) => {
	const [toggleCommits, setToggleCommits] = useState(false);

	return (
		<Fragment>
			<div className='repo-container'>
				<div className='repo-header'>
					<h2>{repo.full_name}</h2>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<i className='fas fa-circle'></i>
						<h4>{repo.language}</h4>
						<i className='fas fa-circle'></i>
						<h4>
							Created:{' '}
							{new Date(repo.created_at).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric'
							})}
						</h4>
					</div>
				</div>
				<div
					className='content-container'
					onClick={() => {
						setToggleCommits(!toggleCommits);
					}}
				>
					<p className='content'>
						{repo.description ? repo.description : 'N/A'}
					</p>
					<div className='repo-icons'>
						<i className='fas fa-star'></i>
						<p>{repo.stargazers_count}</p>
						<i className='fas fa-code-branch'></i>
						<p>{repo.forks}</p>
					</div>
				</div>
			</div>
			{toggleCommits ? (
				<CommitList org={repo.owner.login} repo={repo.name} />
			) : null}
		</Fragment>
	);
};

export default Repo;
