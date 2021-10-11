import React from 'react';
import netflixLogo from '../../images/netflix-logo.png';
import githubLogo from '../../images/github-logo.png';
import SearchBar from './SearchBar';

const NavBar = ({ org, searchOrganization }) => {
	return (
		<nav>
			<div className='logos'>
				{org === 'Netflix' ? (
					<img className='logo' src={netflixLogo} alt='netflix-logo' />
				) : (
					<h1>{org}</h1>
				)}
				<div className='vl'></div>
				<img
					className='logo'
					src={githubLogo}
					alt='github-logo'
					onClick={() => {
						searchOrganization('Github');
					}}
				/>
			</div>

			<SearchBar searchOrganization={searchOrganization} />
		</nav>
	);
};

export default NavBar;
