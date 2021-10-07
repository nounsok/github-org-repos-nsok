import React from 'react';

const Commit = ({ commit }) => {
	return (
		<div className='commit-container'>
			<div className='commit-header'>
				<h3 className='commit-name' style={{ flex: 1 }}>
					{commit.commit.message}
				</h3>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<i className='fas fa-circle'></i>
					<h4>{commit.sha}</h4>
				</div>
			</div>
			<div className='content-container'>
				<div className='commiter'>
					{commit.author ? (
						<img
							className='user-avatar'
							src={commit.author.avatar_url}
							alt='id'
							style={{ width: '20px', height: '20px' }}
						/>
					) : (
						<i className='fas fa-user user-avatar'></i>
					)}
					<p className='content'>
						{commit.author
							? commit.author.login
							: commit.commit.author.name}{' '}
						has commited on{' '}
						{new Date(commit.commit.author.date).toLocaleDateString(
							'en-US',
							{ month: 'long', day: 'numeric', year: 'numeric' }
						)}
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Commit;
