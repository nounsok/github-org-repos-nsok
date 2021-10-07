import React from 'react';
import { ReactComponent as Loading } from '../../images/Spinner.svg';

const Spinner = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Loading
				alt='spinner'
				style={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			/>
		</div>
	);
};

export default Spinner;
