import React from 'react';
import spinner from '../../images/Spinner.svg';

const Spinner = () => {
	return (
		<div style={{ position: 'relative' }}>
			<img
				src={spinner}
				alt='spinner'
				style={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			></img>
		</div>
	);
};

export default Spinner;
