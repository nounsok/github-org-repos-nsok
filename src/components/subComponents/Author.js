import React from 'react';
const Author = ({ author }) => {
	return (
		<div className='author-container'>
			<div className='author-info'>
				<img
					src={author.avatar_url}
					style={{ width: '7.6vw', height: '7.6vw' }}
					alt='Author Avatar'
				></img>
				<h2 className='author-header'>
					{author.name} Repositories on Github
				</h2>
			</div>

			<ul className='author-details'>
				<li>
					<div className='author-icon'>
						<i className='fas fa-boxes'></i>
					</div>
					<div className='icon-description'>
						{author.public_repos ? (
							<p>{author.public_repos} Repositories</p>
						) : null}
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-map-marker-alt'></i>
					</div>
					<div className='icon-description'>
						<p>{author.location}</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fab fa-github'></i>
					</div>
					<div className='icon-description'>
						<a href={author.html_url}>{author.html_url}</a>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-link'></i>
					</div>
					<div className='icon-description'>
						<a href={author.url}>{author.url}</a>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-envelope'></i>
					</div>
					<div className='icon-description'>
						<a href={`mailto:${author.html_url}`}>{author.email}</a>
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
