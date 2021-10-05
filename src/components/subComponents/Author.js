import reactDom from 'react-dom';

const Author = () => {
	return (
		<div className='author-container'>
			<div className='author-info'>
				<img src='' alt='alt source'></img>
				<h2 className='author-header'> Netflix Repositories on Github</h2>
			</div>

			<ul className='author-details'>
				<li>
					<div className='author-icon'>
						<i className='fas fa-boxes'></i>
					</div>
					<div className='icon-description'>
						<p>Repositories</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-map-marker-alt'></i>
					</div>
					<div className='icon-description'>
						<p>Location</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fab fa-github'></i>
					</div>
					<div className='icon-description'>
						<p>Github</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-link'></i>
					</div>
					<div className='icon-description'>
						<p>Link</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-envelope'></i>
					</div>
					<div className='icon-description'>
						<p>Email</p>
					</div>
				</li>
				<li>
					<div className='author-icon disclaimer'>
						<i
							className='fas fa-exclamation'
							style={{ color: '#b20710', fontSize: 20 }}
						></i>
					</div>
					<div className='icon-description'>
						<p style={{ color: '#b20710', fontSize: 15 }}>
							This project is for educational purposes
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Author;
