import React, { Fragment, useState } from 'react';

const SearchBar = ({ searchOrganization }) => {
	const [input, setInput] = useState('');
	return (
		<Fragment>
			<div className='search'>
				<div className='search-bar'>
					<i className='fas fa-search'></i>
					<input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className='search-input'
						name='search-input'
						placeholder='Search for an organization'
						onKeyDown={(e) => {
							if (e.code === 'Enter') {
								searchOrganization(input);
							}
						}}
					/>
				</div>

				{/* <Link to='/createkeep' className='btn btn-primary'>
					{submit}
				</Link> */}
			</div>
		</Fragment>
	);
};

export default SearchBar;
