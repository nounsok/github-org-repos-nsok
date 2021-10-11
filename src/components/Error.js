import React, { Fragment } from 'react';

const Error = ({ status, message }) => {
	return (
		<Fragment>
			<h1
				style={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					fontSize: '60px'
				}}
			>
				{status} ERROR!
			</h1>
		</Fragment>
	);
};

export default Error;
