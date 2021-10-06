import React from 'react';
import netflixLogo from '../../images/netflix-logo.png';
import githubLogo from '../../images/github-logo.png';
import SearchBar from './SearchBar';

const NavBar = () => {
	return (
		<nav>
			<div className='logos'>
				<img className='logo' src={netflixLogo} alt='netflix-logo' />
				<div className='vl'></div>
				<img className='logo' src={githubLogo} alt='github-logo' />
			</div>

			<SearchBar />
		</nav>
	);
};

export default NavBar;
