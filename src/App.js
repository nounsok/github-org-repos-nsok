import './styles/css/styles.css';
import React, { useState } from 'react';
import Navbar from './components/subComponents/NavBar';
import Home from './components/Home';

function App() {
	const [org, setOrg] = useState('Netflix');

	const searchOrganization = (input) => {
		setOrg(input);
	};
	return (
		<div className='app'>
			<div className='wrapper'>
				<Navbar org={org} searchOrganization={searchOrganization} />
				<Home org={org} />
			</div>
			<div className='background'></div>
		</div>
	);
}

export default App;
