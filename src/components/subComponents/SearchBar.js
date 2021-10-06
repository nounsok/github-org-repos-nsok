import React, { Fragment } from 'react';

const SearchBar = () => {
	return (
		<Fragment>
			<div className='search'>
				<div className='search-bar'>
					<i class='fas fa-search'></i>
					<input
						type='text'
						class='t2 search-input'
						name='search-input'
						placeholder='Search for an organization'
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
