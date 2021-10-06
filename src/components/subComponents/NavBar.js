import React from 'react';
import netflixLogo from '../../images/netflix-logo.png';
import githubLogo from '../../images/github-logo.png';

const NavBar = () => {
	return (
		<nav>
			<img className='logo' src={netflixLogo} alt='netflix-logo' />
			<div className='vl'></div>
			<img className='logo' src={githubLogo} alt='github-logo' />
		</nav>
	);
};

export default NavBar;
