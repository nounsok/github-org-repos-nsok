import React, { Fragment, useState } from 'react';

const SearchBar = ({ searchOrganization }) => {
	const [input, setInput] = useState('');

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

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
							if (e.code === 'Enter' || e.which === 13) {
								searchOrganization(
									input !== ''
										? capitalizeFirstLetter(input)
										: 'Netflix'
								);
								setInput('');
							}
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default SearchBar;
