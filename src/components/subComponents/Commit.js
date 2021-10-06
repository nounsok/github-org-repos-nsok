import React from 'react';

const Commit = ({ commit }) => {
	return (
		<div className='commit-container'>
			<div className='commit-header'>
				<h3 className='commit-name' style={{ flex: 1 }}>
					{commit.commit.message}
				</h3>
				<i className='fas fa-circle'></i>
				<h4>{commit.sha}</h4>
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
						has commited on {commit.commit.author.date}.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Commit;
