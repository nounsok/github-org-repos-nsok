const Commit = () => {
	let userAvatar = null;
	return (
		<div className='commit-container'>
			<div className='commit-name'>
				<h3>CommitName</h3>
				<i class='fas fa-circle'></i>
				<h4>CommitHash</h4>
			</div>
			<div className='content-container'>
				<div className='commiter'>
					{userAvatar ? (
						<img className='user-avatar' src='' alt='id' />
					) : (
						<i class='fas fa-user user-avatar'></i>
					)}
					<p className='content'>
						UserName has commited on December 3rd 2021.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Commit;
