import CommitList from './CommitList';
import { useState } from 'react';

const Repo = () => {
	const [toggleCommits, setToggleCommits] = useState(false);
	return (
		<div>
			<div className='repo-container'>
				<div className='repo-name'>
					<h2>RepoName</h2>
					<i class='fas fa-circle'></i>
					<h4>English</h4>
					<i class='fas fa-circle'></i>
					<h4>12/3/2021</h4>
				</div>
				<div
					className='content-container'
					onClick={() => {
						setToggleCommits(!toggleCommits);
					}}
				>
					<p className='content'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className='repo-icons'>
						<i class='fas fa-star'></i>
						<p>400</p>
						<i className='fas fa-code-branch'></i>
						<p>400</p>
					</div>
				</div>
			</div>
			{toggleCommits ? <CommitList /> : null}
		</div>
	);
};

export default Repo;
